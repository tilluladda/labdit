// Mock datasets (formerly served by server.js)
const profiles = {
    sam_sepiol: {
        username: 'sam_sepiol',
        realName: 'Elliot Alderson (Alias: Sam Sepiol)',
        avatar: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=250&h=250&fit=crop',
        bio: 'Security engineer at Allsafe. Just another tech guy. Hobbies include hacking corrupt people, talking to imaginary friends, and rescuing abused dogs. Private Intranet Archive: flag{f50c13ty_fl1pp3r_s3p10l}.',
        location: 'New York, NY',
        joined: 'Joined May 2015'
    },
    mr_robot: {
        username: 'mr_robot',
        realName: 'Edward Alderson (Manifestation)',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&h=250&fit=crop',
        bio: 'Leader of fsociety. Revolution is in our hands. The 1% of the 1% are playing God, and it is time to stop them. Our democracy has been hacked.',
        location: 'Fun Society, Coney Island',
        joined: 'Joined May 2015'
    },
    darlene_f: {
        username: 'darlene_f',
        realName: 'Darlene Alderson',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&h=250&fit=crop',
        bio: "Malware coder, fsociety member. Forensic audits pending. Just updated the decryption library on Elliot's endpoint to verify connection targets.",
        location: 'New York, NY',
        joined: 'Joined Jun 2015'
    },
    mobley_h: {
        username: 'mobley_h',
        realName: 'Sunil Mobley',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&h=250&fit=crop',
        bio: "fsociety member. Sysadmin & network security enthusiast. Check u/trenton_t's profile to find the connection logs for the target machine.",
        location: 'New York, NY',
        joined: 'Joined Jun 2015'
    },
    trenton_t: {
        username: 'trenton_t',
        realName: 'Shama Biswas',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&h=250&fit=crop',
        bio: 'fsociety member. OS design & exploit research. PLC audit completed. Connection target registered in the log as c2FtX3NlcGlvbA==. Search this ID on Labdit to find the target profile.',
        location: 'New York, NY',
        joined: 'Joined Jun 2015'
    },
    allsafe_official: {
        username: 'allsafe_official',
        realName: 'Allsafe Cybersecurity',
        avatar: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=250&h=250&fit=crop',
        bio: 'Official account of Allsafe Cybersecurity. Providing state-of-the-art protection for E-Corp and other global leaders. Forensic audits active for incident INC-88204-CS30.',
        location: 'New York, NY',
        joined: 'Joined Jan 2012'
    },
    gideon_g: {
        username: 'gideon_g',
        realName: 'Gideon Goddard',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&h=250&fit=crop',
        bio: 'CEO of Allsafe Cybersecurity. Committed to keeping the digital world safe. Coordinating with E-Corp executive board regarding the CS30 rootkit remediation plan.',
        location: 'New York, NY',
        joined: 'Joined Jan 2012'
    },
    angela_m: {
        username: 'angela_m',
        realName: 'Angela Moss',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=250&h=250&fit=crop',
        bio: 'Account Manager at Allsafe Cybersecurity. Liaising with client executives to resolve the CS30 incident. Onsite at E-Corp HQ.',
        location: 'New York, NY',
        joined: 'Joined Apr 2013'
    }
};

const posts = [
    {
        id: 1,
        subreddit: 'fsociety',
        author: 'mr_robot',
        title: 'Analyzing the E-Corp tape backups and power grid mapping',
        content: 'We need to make sure we map all the offsite backups correctly. If even one tape library remains online after Stage 1, the entire debt reconstruction project will fail. Our focus must be on Steel Mountain.',
        upvotes: 1042,
        commentsCount: 15,
        createdAt: '2 hours ago',
        comments: [
            { author: 'mobley_h', content: 'Agreed. The climate control system is the only way to destroy them physically.' },
            { author: 'trenton_t', content: 'I am auditing the air conditioning controllers now. It looks like they use older PLCs.' }
        ]
    },
    {
        id: 2,
        subreddit: 'fsociety',
        author: 'sam_sepiol',
        title: 'Bypassing physical security controls at industrial storage facilities',
        content: 'If you ever find yourself needing to audit physical security at a high-security facility like Steel Mountain, do not look for software flaws first. Focus on human vulnerabilities (social engineering) and hardware boundaries. I have documented the physical and network access controls.',
        upvotes: 789,
        commentsCount: 8,
        createdAt: '4 hours ago',
        comments: [
            { author: 'darlene_f', content: "Check u/mobley_h's profile to locate the connection log pieces." },
            { author: 'mobley_h', content: 'Got it. I left the pointers to the target logs on my profile activity page.' }
        ]
    },
    {
        id: 3,
        subreddit: 'cybersecurity',
        author: 'allsafe_official',
        title: 'Important Security Update regarding E-Corp CS30 Server Malicious Payload',
        content: 'Allsafe is currently investigating a highly sophisticated rootkit detected in E-Corp\'s CS30 server cluster. We have contained the initial threat and are working with federal authorities to trace the threat actor.',
        upvotes: 245,
        commentsCount: 34,
        createdAt: '1 day ago',
        comments: [
            { author: 'gideon_g', content: 'We need all staff working overtime. This is a critical incident.' },
            { author: 'angela_m', content: 'Working on the client communication report now.' }
        ]
    },
    {
        id: 4,
        subreddit: 'netsec',
        author: 'darlene_f',
        title: 'Reviewing library dependency injection in modern exploit toolkits',
        content: 'A lot of security tools still rely on static configurations or vulnerable DLL/so injection mechanisms. I am refactoring some of our remote execution shellcodes to use reflective memory injection instead. This avoids dropping payloads to the hard drive entirely, making host-based intrusion detection systems completely blind.',
        upvotes: 512,
        commentsCount: 2,
        createdAt: '8 hours ago',
        comments: [
            { author: 'sam_sepiol', content: 'Clean implementation. Just make sure the heap allocator doesn\'t leave readable segments in memory.' },
            { author: 'mobley_h', content: 'Reflective loading is nice, but did you check compatibility with older kernels?' }
        ]
    },
    {
        id: 5,
        subreddit: 'sysadmin',
        author: 'mobley_h',
        title: 'Best practices for securing intranet gateways against internal threats',
        content: 'Most corporate security models focus exclusively on external perimeter defenses. But the moment an attacker gains internal network access (or a rogue employee acts), it is game over. Always segment your networks, disable unused protocols, and rotate admin access tokens. Speaking of which, keep auditing profiles for leftover admin logs and session pieces.',
        upvotes: 340,
        commentsCount: 1,
        createdAt: '12 hours ago',
        comments: [
            { author: 'trenton_t', content: 'Segmenting is step one, but we also need proper logging. If someone clears the audit trail, you are blind.' }
        ]
    },
    {
        id: 6,
        subreddit: 'reverseengineering',
        author: 'trenton_t',
        title: 'Analysis of firmware decompilation on legacy industrial PLCs',
        content: 'Just finished reverse-engineering the firmware of a climate control PLC commonly used in enterprise facilities. The authentication protocol is incredibly basic—essentially a static challenge-response with no cryptographic signing. I will post the full IDA Pro database and writeup soon once the audit is fully complete.',
        upvotes: 418,
        commentsCount: 1,
        createdAt: '14 hours ago',
        comments: [
            { author: 'mr_robot', content: 'Excellent work. This will be critical for our upcoming audit project.' }
        ]
    },
    {
        id: 7,
        subreddit: 'business',
        author: 'gideon_g',
        title: 'Addressing E-Corp incident and Allsafe’s commitment to client trust',
        content: 'As CEO of Allsafe Cybersecurity, I want to reassure our partners and the public that we are dedicating 100% of our resources to resolving the recent CS30 rootkit incident. Our elite response teams are working day and night. We appreciate your patience and ongoing trust.',
        upvotes: 112,
        commentsCount: 2,
        createdAt: '1 day ago',
        comments: [
            { author: 'angela_m', content: 'Standing by for the E-Corp executive board call, Gideon.' },
            { author: 'allsafe_official', content: 'Official statements will be updated here as forensics makes progress.' }
        ]
    },
    {
        id: 8,
        subreddit: 'management',
        author: 'angela_m',
        title: 'Preparing client incident reports and coordinating post-breach communications',
        content: 'When dealing with a major cybersecurity incident, communication is key. We must coordinate closely with the technical forensics teams and the legal/PR departments to ensure accurate status reports. My role is to bridge the gap between technical victories and client executive understanding.',
        upvotes: 88,
        commentsCount: 1,
        createdAt: '1 day ago',
        comments: [
            { author: 'gideon_g', content: 'Thanks Angela, your communication management is invaluable here.' }
        ]
    }
];

// --- SPA ROUTER & ROUTING LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    // Make search bar interactive
    setupSearchBar();

    // Execute router on startup
    router();

    // Handle URL hash changes
    window.addEventListener('hashchange', router);

    // Setup IRC link event listener if present
    const ircLink = document.getElementById('ircLink');
    if (ircLink) {
        ircLink.addEventListener('click', (e) => {
            e.preventDefault();
            openIrcModal();
        });
    }
});

function router() {
    const hash = window.location.hash || '#/';
    const mainContainer = document.getElementById('mainContainer');

    if (hash === '#/' || hash === '#/home' || hash.startsWith('#/home?')) {
        // Parse search parameters if any
        let searchQuery = '';
        if (hash.includes('?search=')) {
            const parts = hash.split('?search=');
            searchQuery = decodeURIComponent(parts[parts.length - 1]);
        }
        showHomeView(searchQuery);
    } else if (hash.startsWith('#/user/')) {
        const parts = hash.split('/');
        const username = parts[parts.length - 1];
        showProfileView(username);
    } else {
        // Default fallback
        showHomeView();
    }
}

function setupSearchBar() {
    const searchBars = document.querySelectorAll('.search-bar');
    const validUsernames = Object.keys(profiles);

    searchBars.forEach(searchBar => {
        searchBar.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const query = searchBar.value.trim().toLowerCase();
                if (!query) return;

                // Strip u/ prefix if present
                const cleanQuery = query.startsWith('u/') ? query.slice(2) : query;

                // Check if query exactly matches or is contained in a known user
                const matchedUser = validUsernames.find(u => u === cleanQuery || u.includes(cleanQuery));
                if (matchedUser) {
                    window.location.hash = `#/user/${matchedUser}`;
                } else {
                    // Filter homepage feed
                    window.location.hash = `#/home?search=${encodeURIComponent(query)}`;
                }
            }
        });
    });
}

// --- VIEW MOUNTERS ---

function showHomeView(searchQuery = '') {
    const mainContainer = document.getElementById('mainContainer');

    // Load layout skeleton
    mainContainer.innerHTML = `
    <!-- Left Content Feed -->
    <main class="posts-list" id="postsContainer">
      <div style="color: var(--text-muted); text-align: center; padding: 3rem; font-size: 0.9rem;">
        Loading feed...
      </div>
    </main>

    <!-- Right Sidebar Widgets -->
    <aside class="sidebar-panel">
      <!-- Widget 1: About Community -->
      <div class="widget-card">
        <div class="widget-title">About Community</div>
        <div class="widget-body">
          <p>Welcome to Labdit, a secure intranet message board used by fsociety members to exchange ideas, theories, and notes.</p>
          <div class="community-details">
            <div class="detail-row">
              <span style="color: var(--text-muted);">Members</span>
              <span class="detail-val">128,401</span>
            </div>
            <div class="detail-row">
              <span style="color: var(--text-muted);">Online</span>
              <span class="detail-val">529</span>
            </div>
            <div class="detail-row" style="margin-top: 0.5rem; border-top: 1px solid var(--border-color); padding-top: 0.5rem;">
              <span style="color: var(--text-muted);">Created</span>
              <span class="detail-val">May 5, 2015</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Widget 2: r/fsociety Rules -->
      <div class="widget-card">
        <div class="widget-title">r/fsociety Rules</div>
        <div class="widget-body">
          <ol class="rules-list">
            <li>
              <strong>No E-Corp Apologists</strong>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.1rem;">Any posts or comments defending E-Corp or their debt systems will be deleted immediately.</p>
            </li>
            <li>
              <strong>Stay Anonymous</strong>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.1rem;">Do not post names, IP addresses, or any personal details that could compromise group operations.</p>
            </li>
            <li>
              <strong>Keep Content Relevant</strong>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.1rem;">All discussions must focus on security vulnerabilities, systems mapping, and technical guides.</p>
            </li>
            <li>
              <strong>No Spam or Self-Promotion</strong>
              <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.1rem;">Keep the board clean. Extraneous traffic wastes bandwidth on our VPN nodes.</p>
            </li>
          </ol>
        </div>
      </div>
    </aside>
  `;

    // Filter posts
    const postsContainer = document.getElementById('postsContainer');
    const filteredPosts = posts.filter(post => {
        if (!searchQuery) return true;
        return post.title.toLowerCase().includes(searchQuery) ||
            post.content.toLowerCase().includes(searchQuery) ||
            post.subreddit.toLowerCase().includes(searchQuery) ||
            post.author.toLowerCase().includes(searchQuery);
    });

    postsContainer.innerHTML = '';

    if (filteredPosts.length === 0) {
        postsContainer.innerHTML = `
      <div style="color: var(--text-muted); text-align: center; padding: 3rem; font-size: 0.9rem;">
        No posts matched search query: "${escapeHTML(searchQuery)}"
        <br><br>
        <a href="#/" class="btn-reddit" style="display: inline-block; margin-top: 1rem;">Clear Search</a>
      </div>
    `;
        return;
    }

    filteredPosts.forEach(post => {
        const postCard = renderPostCard(post);
        postsContainer.appendChild(postCard);
    });

    // Modal Setup
    const postModal = document.getElementById('postModal');
    const modalClose = document.getElementById('modalClose');
    modalClose.addEventListener('click', () => {
        postModal.classList.remove('active');
    });
    postModal.addEventListener('click', (e) => {
        if (e.target === postModal) {
            postModal.classList.remove('active');
        }
    });

    // Highlight search input value if active
    const searchBars = document.querySelectorAll('.search-bar');
    searchBars.forEach(sb => sb.value = searchQuery);
}

function showProfileView(username) {
    const mainContainer = document.getElementById('mainContainer');
    const cleanUsername = username.toLowerCase();
    const user = profiles[cleanUsername];

    if (!user) {
        mainContainer.innerHTML = `
      <div style="color: var(--accent-orange); text-align: center; padding: 5rem 2rem; font-size: 1rem; grid-column: 1 / -1;">
        Error: 404 - Profile u/${escapeHTML(username)} not found.
        <br><br>
        <a href="#/" class="btn-reddit" style="display: inline-block; margin-top: 1rem;">Back to Home</a>
      </div>
    `;
        return;
    }

    // Load profile skeleton
    mainContainer.innerHTML = `
    <!-- Left Column: User's posts -->
    <main class="posts-list">
      <div class="widget-card" style="border-radius: 1rem; padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
        <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Overview of User Submissions</div>
        <div id="userPostsList">
          <div style="color: var(--text-muted); font-size: 0.9rem; padding: 1.5rem 0;">
            Retrieving post submissions by this user...
          </div>
        </div>
      </div>
    </main>

    <!-- Right Column: User Profile Card -->
    <aside class="profile-sidebar" style="display: flex; flex-direction: column; gap: 1rem; width: 312px;">
      <div class="profile-card" id="profileCard" style="width: 100%;">
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
      </div>
    </aside>
  `;

    // Render posts by this author
    const userPostsList = document.getElementById('userPostsList');
    const userPosts = posts.filter(p => p.author.toLowerCase() === cleanUsername);
    userPostsList.innerHTML = '';

    if (userPosts.length === 0) {
        userPostsList.innerHTML = `<div style="color: var(--text-muted); font-size: 0.9rem;">u/${escapeHTML(username)} hasn't posted anything yet.</div>`;
    } else {
        userPosts.forEach(post => {
            const postCard = renderPostCard(post);
            userPostsList.appendChild(postCard);
        });
    }

    // Clear search inputs when viewing profile
    const searchBars = document.querySelectorAll('.search-bar');
    searchBars.forEach(sb => sb.value = '');
}

// --- CARD & MODAL RENDERERS ---

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
        <a href="#/user/${post.author}" class="author-tag" onclick="event.stopPropagation();">u/${post.author}</a>
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

    postCard.addEventListener('click', () => {
        openPostModal(post);
    });

    const upvoteBtn = postCard.querySelector('.upvote');
    const downvoteBtn = postCard.querySelector('.downvote');
    const voteCount = postCard.querySelector('.vote-count');
    let voted = 0;

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
    const postModal = document.getElementById('postModal');
    const modalPostContent = document.getElementById('modalPostContent');

    modalPostContent.innerHTML = `
    <div class="post-header">
      <span class="subreddit-tag">r/${post.subreddit}</span>
      <span>• Posted by</span>
      <a href="#/user/${post.author}" class="author-tag">u/${post.author}</a>
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
              <a href="#/user/${c.author}" class="author-tag">u/${c.author}</a>
            </div>
            <div class="comment-body">${linkifyUsernames(escapeHTML(c.content))}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
    postModal.classList.add('active');
}

// --- UTILITY FUNCTIONS ---

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

function linkifyUsernames(text) {
    if (!text) return '';
    return text.replace(/u\/([a-zA-Z0-9_]+)/g, '<a href="#/user/$1" class="author-tag">u/$1</a>');
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
