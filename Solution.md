# Lab Guide: Solving the Web Exploration & OSINT Lab

This guide walk you through solving the **Labdit Web Exploration & OSINT Lab** to retrieve the flag.

## Step-by-Step Solution

### 1. Discover the Pointers
1. Access the Labdit homepage feed.
2. Locate the post titled **"Bypassing physical security controls at industrial storage facilities"** (authored by `u/sam_sepiol`).
3. Open the post or look at its comments. You will see a comment from `u/darlene_f`:
   > *"Check u/mobley_h's profile to locate the connection log pieces."*
4. Click on `u/mobley_h`'s username link to visit his profile.

### 2. Follow the Scavenger Hunt Pointers
1. On **Sunil Mobley's (`u/mobley_h`) profile**, look at his profile **Bio**:
   > *"fsociety member. Sysadmin & network security enthusiast. Check u/trenton_t's profile to find the connection logs for the target machine."*
2. Click on `u/trenton_t`'s username link to visit her profile.

### 3. Retrieve and Decode the Username
1. On Shama Biswas's (`u/trenton_t`) profile, look at her profile **Bio**:
   > *"fsociety member. OS design & exploit research. PLC audit completed. Connection target registered in the log as c2FtX3NlcGlvbA==. Search this ID on Labdit to find the target profile."*
2. Deduce that `c2FtX3NlcGlvbA==` is a standard Base64-encoded string.
3. Decode `c2FtX3NlcGlvbA==` using a standard decoder:
   - Decoding `c2FtX3NlcGlvbA==` yields: **`sam_sepiol`**

### 4. Search and Extract the Flag
1. Use the interactive search bar at the top of the site to search for **`sam_sepiol`** and press Enter (or click any link to `u/sam_sepiol`) to navigate directly to Elliot Alderson's profile.
2. On Elliot's profile page, locate the **Bio** section.
3. The flag is displayed directly at the end of his bio:
   ```text
   flag{f50c13ty_fl1pp3r_s3p10l}
   ```
