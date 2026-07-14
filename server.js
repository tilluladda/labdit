const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 80;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Mock data for Labdit posts
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
      { author: 'darlene_f', content: 'Check u/mobley_h\'s profile to locate the connection log pieces.' },
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

// Endpoint to get all posts
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// Endpoint to get a specific user profile
app.get('/api/profile/:username', (req, res) => {
  const username = req.params.username.toLowerCase();

  if (username === 'sam_sepiol') {
    res.json({
      username: 'sam_sepiol',
      realName: 'Elliot Alderson (Alias: Sam Sepiol)',
      avatar: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=250&h=250&fit=crop',
      bio: 'Security engineer at Allsafe. Just another tech guy. Hobbies include hacking corrupt people, talking to imaginary friends, and rescuing abused dogs. Private Intranet Archive: flag{f50c13ty_fl1pp3r_s3p10l}.',
      location: 'New York, NY',
      joined: 'Joined May 2015'
    });
  } else if (username === 'mr_robot') {
    res.json({
      username: 'mr_robot',
      realName: 'Edward Alderson (Manifestation)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&h=250&fit=crop',
      bio: 'Leader of fsociety. Revolution is in our hands. The 1% of the 1% are playing God, and it is time to stop them. Our democracy has been hacked.',
      location: 'Fun Society, Coney Island',
      joined: 'Joined May 2015'
    });
  } else if (username === 'darlene_f') {
    res.json({
      username: 'darlene_f',
      realName: 'Darlene Alderson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&h=250&fit=crop',
      bio: 'Malware coder, fsociety member. Forensic audits pending. Just updated the decryption library on Elliot\'s endpoint to verify connection targets.',
      location: 'New York, NY',
      joined: 'Joined Jun 2015'
    });
  } else if (username === 'mobley_h') {
    res.json({
      username: 'mobley_h',
      realName: 'Sunil Mobley',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&h=250&fit=crop',
      bio: 'fsociety member. Sysadmin & network security enthusiast. Check u/trenton_t\'s profile to find the connection logs for the target machine.',
      location: 'New York, NY',
      joined: 'Joined Jun 2015'
    });
  } else if (username === 'trenton_t') {
    res.json({
      username: 'trenton_t',
      realName: 'Shama Biswas',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&h=250&fit=crop',
      bio: 'fsociety member. OS design & exploit research. PLC audit completed. Connection target registered in the log as c2FtX3NlcGlvbA==. This user has some data which is not generally given to everyone.',
      location: 'New York, NY',
      joined: 'Joined Jun 2015'
    });
  } else if (username === 'allsafe_official') {
    res.json({
      username: 'allsafe_official',
      realName: 'Allsafe Cybersecurity',
      avatar: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=250&h=250&fit=crop',
      bio: 'Official account of Allsafe Cybersecurity. Providing state-of-the-art protection for E-Corp and other global leaders. Forensic audits active for incident INC-88204-CS30.',
      location: 'New York, NY',
      joined: 'Joined Jan 2012'
    });
  } else if (username === 'gideon_g') {
    res.json({
      username: 'gideon_g',
      realName: 'Gideon Goddard',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&h=250&fit=crop',
      bio: 'CEO of Allsafe Cybersecurity. Committed to keeping the digital world safe. Coordinating with E-Corp executive board regarding the CS30 rootkit remediation plan.',
      location: 'New York, NY',
      joined: 'Joined Jan 2012'
    });
  } else if (username === 'angela_m') {
    res.json({
      username: 'angela_m',
      realName: 'Angela Moss',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=250&h=250&fit=crop',
      bio: 'Account Manager at Allsafe Cybersecurity. Liaising with client executives to resolve the CS30 incident. Onsite at E-Corp HQ.',
      location: 'New York, NY',
      joined: 'Joined Apr 2013'
    });
  } else {
    res.status(404).json({ error: 'Profile not found' });
  }
});

app.get('/user/:username', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'profile.html'));
});

// Wildcard route to handle spa behavior or redirect to home
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
