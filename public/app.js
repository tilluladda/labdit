document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    // Make search bars interactive and handle navigation/filtering
    setupSearchBar();

    if (path === '/' || path === '/index.html') {
        initHome();
    } else if (path.startsWith('/user/')) {
        const parts = path.split('/').filter(Boolean);
        const username = parts[parts.length - 1];
        initProfile(username);
    }

    // Setup IRC link event listener if present
    const ircLink = document.getElementById('ircLink');
    if (ircLink) {
        ircLink.addEventListener('click', (e) => {
            e.preventDefault();
            openIrcModal();
        });
    }
});

function setupSearchBar() {
    const searchBars = document.querySelectorAll('.search-bar');
    const usernames = ['sam_sepiol', 'mr_robot', 'darlene_f', 'mobley_h', 'trenton_t', 'allsafe_official', 'gideon_g', 'angela_m'];

    searchBars.forEach(searchBar => {
        // Remove readonly dynamically
        searchBar.removeAttribute('readonly');

        // Enter keydown event
        searchBar.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const query = searchBar.value.trim().toLowerCase();
                if (!query) return;

                // Strip u/ prefix
                const cleanQuery = query.startsWith('u/') ? query.slice(2) : query;

                // Check if matching any known username
                const matchedUser = usernames.find(u => u === cleanQuery || u.includes(cleanQuery));
                if (matchedUser) {
                    window.location.href = `/user/${matchedUser}`;
                } else {
                    // Redirect to home page with search query
                    window.location.href = `/?search=${encodeURIComponent(query)}`;
                }
            }
        });
    });
}

// --- HOME PAGE LOGIC ---
function initHome() {
    const postsContainer = document.getElementById('postsContainer');
    const postModal = document.getElementById('postModal');
    const modalClose = document.getElementById('modalClose');
    const modalPostContent = document.getElementById('modalPostContent');

    // Check URL search parameters
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search')?.toLowerCase() || '';

    if (searchQuery) {
        const searchBars = document.querySelectorAll('.search-bar');
        searchBars.forEach(sb => sb.value = searchQuery);
    }

    // Fetch posts from API
    fetch('/api/posts')
        .then(res => res.json())
        .then(posts => {
            postsContainer.innerHTML = '';

            const filteredPosts = posts.filter(post => {
                if (!searchQuery) return true;
                return post.title.toLowerCase().includes(searchQuery) ||
                    post.content.toLowerCase().includes(searchQuery) ||
                    post.subreddit.toLowerCase().includes(searchQuery) ||
                    post.author.toLowerCase().includes(searchQuery);
            });

            if (filteredPosts.length === 0) {
                postsContainer.innerHTML = `
          <div style="color: var(--text-muted); text-align: center; padding: 3rem; font-size: 0.9rem;">
            No posts matched search query: "${escapeHTML(searchQuery)}"
            <br><br>
            <a href="/" class="btn-reddit" style="display: inline-block; margin-top: 1rem;">Clear Search</a>
          </div>
        `;
                return;
            }

            filteredPosts.forEach(post => {
                const postCard = renderPostCard(post);
                postsContainer.appendChild(postCard);
            });
        })
        .catch(err => {
            console.error('Error fetching posts:', err);
            postsContainer.innerHTML = `
        <div style="color: var(--accent-orange); text-align: center; padding: 3rem; font-size: 0.9rem;">
          Error: Failed to retrieve posts feed.
        </div>
      `;
        });

    // Modal handlers
    modalClose.addEventListener('click', () => {
        postModal.classList.remove('active');
    });

    postModal.addEventListener('click', (e) => {
        if (e.target === postModal) {
            postModal.classList.remove('active');
        }
    });
}

// Render standard Reddit-like post card
function renderPostCard(post) {
    const postCard = document.createElement('div');
    postCard.className = 'post-card';
    postCard.innerHTML = `
    <div class="vote-section">
      <button class="vote-btn upvote">▲</button>
      <span class="vote-count">${post.upvotes}</span>
      <button class="vote-btn downvote">▼</button>
    </div>
    <div class="post-content-area">
      <div class="post-header">
        <span class="subreddit-tag">r/${post.subreddit}</span>
        <span>•</span>
        <span>Posted by</span>
        <a href="/user/${post.author}" class="author-tag" onclick="event.stopPropagation();">u/${post.author}</a>
        <span>${post.createdAt}</span>
      </div>
      <div class="post-title">${escapeHTML(post.title)}</div>
      <div class="post-body">${escapeHTML(post.content)}</div>
      <div class="post-footer">
        <div class="footer-item">
          <span>💬</span> ${post.commentsCount} Comments
        </div>
        <div class="footer-item">
          <span>🔗</span> Share
        </div>
      </div>
    </div>
  `;

    // Click event to open post modal
    postCard.addEventListener('click', () => {
        openPostModal(post);
    });

    // Interactive voting simulation
    const upvoteBtn = postCard.querySelector('.upvote');
    const downvoteBtn = postCard.querySelector('.downvote');
    const voteCount = postCard.querySelector('.vote-count');
    let voted = 0; // 0 = none, 1 = upvoted, -1 = downvoted

    upvoteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (voted === 1) {
            voted = 0;
            upvoteBtn.style.color = '';
            voteCount.textContent = post.upvotes;
        } else {
            voted = 1;
            upvoteBtn.style.color = 'var(--accent-orange)';
            downvoteBtn.style.color = '';
            voteCount.textContent = post.upvotes + 1;
        }
    });

    downvoteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (voted === -1) {
            voted = 0;
            downvoteBtn.style.color = '';
            voteCount.textContent = post.upvotes;
        } else {
            voted = -1;
            downvoteBtn.style.color = 'var(--accent-blue)';
            upvoteBtn.style.color = '';
            voteCount.textContent = post.upvotes - 1;
        }
    });

    return postCard;
}

function openPostModal(post) {
    let postModal = document.getElementById('postModal');
    let modalPostContent = document.getElementById('modalPostContent');

    if (!postModal) {
        postModal = document.createElement('div');
        postModal.id = 'postModal';
        postModal.className = 'modal-overlay';

        const contentWrapper = document.createElement('div');
        contentWrapper.className = 'modal-content';

        const closeBtn = document.createElement('button');
        closeBtn.className = 'modal-close';
        closeBtn.id = 'modalClose';
        closeBtn.innerHTML = '&times;';
        closeBtn.addEventListener('click', () => {
            postModal.classList.remove('active');
        });

        modalPostContent = document.createElement('div');
        modalPostContent.id = 'modalPostContent';

        contentWrapper.appendChild(closeBtn);
        contentWrapper.appendChild(modalPostContent);
        postModal.appendChild(contentWrapper);

        postModal.addEventListener('click', (e) => {
            if (e.target === postModal) {
                postModal.classList.remove('active');
            }
        });

        document.body.appendChild(postModal);
    }

    modalPostContent.innerHTML = `
    <div class="post-header">
      <span class="subreddit-tag">r/${post.subreddit}</span>
      <span>• Posted by</span>
      <a href="/user/${post.author}" class="author-tag">u/${post.author}</a>
      <span>${post.createdAt}</span>
    </div>
    <h2 class="post-title" style="margin-bottom: 1rem; font-size: 1.3rem;">${escapeHTML(post.title)}</h2>
    <div class="post-body" style="font-size: 0.95rem; color: var(--text-main); margin-bottom: 1.5rem;">
      ${linkifyUsernames(escapeHTML(post.content))}
    </div>
    
    <div class="comments-section">
      <h3 class="comments-title">Comments (${post.comments.length})</h3>
      <div class="comments-list">
        ${post.comments.map(c => `
          <div class="comment-card">
            <div class="comment-header">
              <a href="/user/${c.author}" class="author-tag">u/${c.author}</a>
            </div>
            <div class="comment-body">${linkifyUsernames(escapeHTML(c.content))}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
    postModal.classList.add('active');
}

// --- PROFILE PAGE LOGIC ---
function initProfile(username) {
    const profileCard = document.getElementById('profileCard');
    const userPostsList = document.getElementById('userPostsList');

    // Fetch profile card data
    fetch(`/api/profile/${username}`)
        .then(res => {
            if (!res.ok) throw new Error('Profile not found');
            return res.json();
        })
        .then(user => {
            // Render user card metadata
            profileCard.innerHTML = `
        <div class="profile-header">
          <img src="${user.avatar}" alt="${user.username}" class="profile-avatar">
          <div class="profile-info">
            <h1>${escapeHTML(user.realName)}</h1>
            <div class="username-sub">u/${user.username}</div>
          </div>
        </div>
        
        <div class="profile-bio" style="margin-top: 0.5rem;">
          ${linkifyUsernames(escapeHTML(user.bio))}
        </div>

        <div class="profile-stats-row">
          <div class="stat-item">
            <span class="stat-val">15,482</span>
            <span class="stat-label">Karma</span>
          </div>
          <div class="stat-item">
            <span class="stat-val">May 5, 2015</span>
            <span class="stat-label">Cake Day</span>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.5rem;">
          <button class="btn-reddit" style="width: 100%; border: none;">Chat</button>
          <button class="btn-reddit-outline" style="width: 100%;">Follow</button>
        </div>

      `;



            // Now fetch and render posts specifically authored by this user
            fetch('/api/posts')
                .then(res => res.json())
                .then(posts => {
                    const userPosts = posts.filter(p => p.author.toLowerCase() === username.toLowerCase());
                    userPostsList.innerHTML = '';

                    if (userPosts.length === 0) {
                        userPostsList.innerHTML = `<div style="color: var(--text-muted); font-size: 0.9rem;">u/${escapeHTML(username)} hasn't posted anything yet.</div>`;
                    } else {
                        userPosts.forEach(post => {
                            const postCard = renderPostCard(post);
                            userPostsList.appendChild(postCard);
                        });
                    }
                });
        })
        .catch(err => {
            console.error(err);
            profileCard.innerHTML = `
        <div style="color: var(--accent-orange); text-align: center; padding: 2rem; font-size: 0.9rem;">
          Error: 404 - Profile u/${escapeHTML(username)} not found.
        </div>
      `;
            userPostsList.innerHTML = `
        <div style="color: var(--text-muted); font-size: 0.9rem; text-align: center; padding: 2rem;">
          Failed to fetch submissions.
          <br><br>
          <a href="/" class="btn-reddit" style="display: inline-block; margin-top: 1rem;">Back to Home</a>
        </div>
      `;
        });
}



// HTML Escaping utility
function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g,
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}

// Dynamically convert u/username to clickable links
function linkifyUsernames(text) {
    if (!text) return '';
    return text.replace(/u\/([a-zA-Z0-9_]+)/g, '<a href="/user/$1" class="author-tag">u/$1</a>');
}

// Simulated IRC terminal modal
function openIrcModal() {
    let ircModal = document.getElementById('ircModal');
    if (!ircModal) {
        ircModal = document.createElement('div');
        ircModal.id = 'ircModal';
        ircModal.className = 'modal-overlay';

        ircModal.innerHTML = `
      <div class="modal-content terminal-theme" style="max-width: 600px; background: #0b1416; border: 2px solid var(--accent-orange); font-family: 'Courier New', monospace; color: var(--text-main); padding: 1.5rem; border-radius: 8px; box-shadow: 0 0 20px rgba(255, 69, 0, 0.2);">
        <div class="terminal-header" style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; margin-bottom: 1rem; font-size: 0.85rem;">
          <span style="color: var(--accent-orange); font-weight: bold;">irc.fsociety.internal - #fsociety (Port 6667)</span>
          <button class="irc-close" id="ircClose" style="background: none; border: none; color: var(--text-muted); font-size: 1.5rem; cursor: pointer; line-height: 1;">&times;</button>
        </div>
        <div class="terminal-body" style="height: 300px; overflow-y: auto; font-size: 0.9rem; line-height: 1.4; display: flex; flex-direction: column; gap: 0.4rem; padding-right: 0.5rem; color: var(--text-main);">
          <div><span style="color: var(--text-muted);">[10:14:22]</span> * Connecting to irc.fsociety.internal...</div>
          <div><span style="color: var(--text-muted);">[10:14:23]</span> * Channel #fsociety joined. Topic: "Steel Mountain operation details".</div>
          <div><span style="color: var(--text-muted);">[10:14:25]</span> &lt;<span style="color: var(--accent-blue);">mr_robot</span>&gt; Trenton, Trenton, Trenton. Audit the aircon controllers.</div>
          <div><span style="color: var(--text-muted);">[10:14:41]</span> &lt;<span style="color: var(--accent-orange);">trenton_t</span>&gt; Done. The PLCs are vulnerable. I saved the config log summary.</div>
          <div><span style="color: var(--text-muted);">[10:15:02]</span> &lt;<span style="color: var(--accent-blue);">mobley_h</span>&gt; Where is Elliot? The server logs are critical.</div>
          <div><span style="color: var(--text-muted);">[10:15:15]</span> &lt;<span style="color: var(--accent-orange);">darlene_f</span>&gt; He's trying to bypass Allsafe CS30 logs. His login token is locked down.</div>
          <div><span style="color: var(--text-muted);">[10:15:32]</span> &lt;<span style="color: var(--accent-blue);">sam_sepiol</span>&gt; I'm here. Darlene, tell Gideon we are on it. Keep our intranet profiles clean.</div>
          <div><span style="color: var(--text-muted);">[10:15:58]</span> &lt;<span style="color: var(--accent-orange);">darlene_f</span>&gt; Pointers to credentials have been distributed. Remember to log in using the Allsafe Secure Portal.</div>
        </div>
      </div>
    `;

        document.body.appendChild(ircModal);

        ircModal.querySelector('#ircClose').addEventListener('click', () => {
            ircModal.classList.remove('active');
        });

        ircModal.addEventListener('click', (e) => {
            if (e.target === ircModal) {
                ircModal.classList.remove('active');
            }
        });
    }

    ircModal.classList.add('active');
}
