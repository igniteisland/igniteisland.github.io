import{u as x,b as E,d,c as i,m as A,a as e,t as a,j as W,f as h,v as N,F as H,r as M,n as D,o as r,_ as $}from"./index-B9K-315X.js";import{k as I}from"./marked.esm-B5D8JARp.js";import{n as B}from"./TheIslandNavbar-CKV16x0t.js";const c=`### *Summary:*
The Island is a game where the last one standing wins. Unless explicitly stated, Everyday someone will be kicked off the Island by a vote of the survivors on the Island. The Island has mutual relationships such as the Hunter and the Cook, and competitive relationships like the Hunter and the Fisher. There are 4 Secret Roles that have varying levels of impact on the Island. There's ones that are immediate threats like the Cannibal or Werewolf, and ones that are highly dependent on the user such as the Wizard and Mimic. Your goal doesn't have to be to get rid of the Secret Roles, as the Secret Roles will be irrelevant once there are 5 people left on the Island. However, getting rid of the Secret Roles can greatly increase your chances of survival. The weather, survivors, special events, and even the Island itself are what you are playing against. 

### Rules for the Days:
Day 1 - Day 1 is an important day in determining how the rest of the Island will usually be played. The Moon is chosen by the previous Island's Winner to begin the Moon Cycle. No one will be voted off on Day 1, however, death is still a possibility.

Normal Day: On normal days, a vote will take place to vote someone off the Island for that day. (You can even vote on yourself)

The Sixth Day: The Sixth Day on the Island is set aside for Special Events. There is a chance that no vote will be held that day, but this is not guaranteed.

Ties: In the case of a tie, a revote will be taking place to kick someone off. If there is another tie, no one will be kicked off the Island and the next day will take place.

Death: If the person that was going to be kicked off is killed, the day will continue to the next.

Final 2 Voting: Only those who were kicked off will be able to vote on the Final 2 to decide a winner. If there is a tie, the dead will break the tie by a majority vote.

Final 3 Death: There is a possibility that the game can end with a vote and a death in the Final 3. If this is the case the winner will skip the Final 2 Voting Rule.

If You don't vote: Not voting for a day will vote on the last person you voted on automatically. If you don't vote for 2 days straight your vote no longer gets counted.

## Health & Food Rules

### Core Stats

Each player has two tracked resources:

- **Health Points (HP):** starts at **10**
    
- **Food Points (Food):** starts at **10**
    

**Stat limits:** HP and Food are always kept within **0–10**.

- They **cannot exceed 10**
    
- They **cannot drop below 0**
    
- After each update window, values are **clamped** into the 0–10 range
    

---

## Daily Timeline

There are **two** update windows each day:

1. **Start of Day** (automatic HP changes)
    
2. **After Voting Ends** (End-of-Day Resolution: HP + Food changes)
    

---

# 1) Start of Day — Automatic HP Updates

At the start of each day, update HP in this order:

### A) Starvation Damage (based on last night’s Food)

If a player ended the previous day at **0 Food**, they are **starving**.

- A starving player loses **−1 HP** at the start of the day.
    
- This is based on the player’s **Food from the end of last day** (since Food updates after voting).
    

### B) Weather + Structure + Clothing HP Modifier

After starvation damage, apply the environment HP modifier for the day based on:

- **Structure** (Good / Bad)
    
- **Clothing** (Good / Bad)
    
- **Weather**
    

**Good Structure / Good Clothing**

- Clear, Rainy, Hot, Cold: **+1 HP**
    
- Heat Wave or Freezing: **0 HP**
    

**Good Structure / Bad Clothing**

- Clear: **+1 HP**
    
- Rainy, Hot, Cold: **0 HP**
    
- Heat Wave, Freezing: **−1 HP**
    

**Bad Structure / Good Clothing**

- Clear: **+1 HP**
    
- Rainy, Hot, Cold, Heat Wave, Freezing: **0 HP**
    

**Bad Structure / Bad Clothing**

- Clear: **0 HP**
    
- Rainy, Hot, Cold, Heat Wave, Freezing: **−1 HP**
    

### C) 2-Day Food Streak HP Modifier (Non-overlapping)

At the start of the day, apply a streak modifier based on the **Food Found results from previous days**:

- If **food was found for 2 consecutive days**, then **all players gain +1 HP today**.
    
- If **no food was found for 2 consecutive days**, then **all players lose −1 HP today**.
    

**Non-overlapping rule (reset):**  
Once a 2-day pair triggers a bonus/penalty, the streak **resets**. The next streak must be built from scratch.

**Examples**

- Food found Day 1 and Day 2 → **+1 HP on Day 3**, then the streak resets.
    
- No food found Day 4 and Day 5 → **−1 HP on Day 6**, then the streak resets.
    

### D) Clamp

After all Start-of-Day HP changes:

- Clamp HP to **0–10**
    

> Note: HP can change at the start of the day, but **death is only checked after End-of-Day Resolution** (see below). This avoids “dying mid-day” from automatic modifiers.

---

# 2) After Voting Ends — End-of-Day Resolution (HP + Food)

After voting ends, resolve all player-driven effects and daily Food consumption in this order.

### End-of-Day Resolution Order (per player)

1. **Apply all negative effects first**
    
    - Poisons / damage
        
    - Any Food loss from poisons/effects
        
    - Daily Food consumption (if applicable)
        
2. **Apply all positive effects second**
    
    - Heals / meals / bonuses
        
    - Any Food gain from meals/effects
        
3. **Clamp** HP and Food to **0–10**
    
4. **Death check**
    
    - If a player’s **HP is 0 after all end-of-day calculations**, the player is **dead**
        
    - A player does **not** die mid-calculation if healing later would bring them above 0
        

---

## Food Rules (Resolved After Voting Ends)

### Daily Consumption

Each day, players attempt to consume **1 Food**:

- If **food is found that day**:  
    → Food does **not** decrease (0 change from consumption)
    
- If **food is NOT found that day**:  
    → Food decreases by **−1** from consumption
    

This happens during End-of-Day Resolution in the negative phase.

### Food Cap

Food cannot exceed **10**. Any Food gained is clamped to 10.

---

## Heals & Poisons (Resolved After Voting Ends)

### Healing Effects

- **Bard (Morale Boost):** \`+2 HP, +0 Food\`
    
- **Gourmet Scorpion Stew:** \`+2 HP, +2 Food\`
    
- **Medic (Heal):** \`+2 HP, +1 Food\`
    
- **Tasty Tangerine:** \`+3 HP, +3 Food\`
    
- **Wizard (Heal):** \`+3 HP, +3 Food\`
    

### Poison Effects (Damage)

- **Assassin (Poison):** \`−1 HP, −1 Food\`
    
- **Cook (Poison):** \`−1 HP, −2 Food\`
    
- **Medic (Poison):** \`−2 HP, −1 Food\`
    
- **Wizard (Poison):** \`−3 HP, −3 Food\`
    

**Reminder:** During End-of-Day Resolution, apply **negatives first**, then **positives**, then clamp, then do the death check.

## Day Cooldowns

Some abilities have **day-based cooldowns** (example: 3-day cooldown).

### When your cooldown ends

If you use an ability on **Day D** with a cooldown of **C days**, the earliest day you can use it again is:

**Next Available Day = D + C**

#### Example (3-day cooldown)

- Used on **Day 1**
    
- Next available day: **Day 1 + 3 = Day 4**
    
- So it cannot be used on Days 2 or 3.
    

More examples:

- 3-day cooldown used on Day 4 → next available Day 7
    
- 2-day cooldown used on Day 6 → next available Day 8
    

### Cooldowns are tied to the player

Cooldowns belong to the **player who used the ability**, not the role itself.

- If a player changes roles (Teacher, etc.), their cooldowns **do not reset**.
    
- If the role changes hands, the cooldown **does not transfer** with the role (each player tracks their own cooldown history).
    

### Cooldowns do not reset

Nothing resets cooldowns unless a rule explicitly says so.


## Role Disabled (Weaken / Jail / Disable Effects)

Some effects can **disable a player’s role for the day** (and sometimes their vote). If multiple disable effects happen on the same day, they resolve using the priority order below.

### Disable Priority Order (highest to lowest)

1. **Wizard — Weaken**
    
2. **Jailor — Jail**
    
3. **Food-Role Disable Effects** (examples: Jinxed Jackrabbit, Cursed Cuttlefish Ink)
    

If a player is affected by multiple disables, the **highest priority effect determines the final outcome** for that day.

---

## What “Role Disabled” means

If a player’s role is disabled for the day:

- They **cannot perform their role action** that day (unless explicitly stated otherwise).
    
- Their **vote may be cancelled** if the disabling effect states that it cancels voting.
    

> Important: Some disables only affect role actions, some affect both role actions and voting. The effect description decides what is blocked.

---

## Mutual Disables (Example)

Example scenario:

- Hunter finds **Jinxed Jackrabbit** (disables role + vote).
    
- Fisher finds **Cursed Cuttlefish Ink** (disables role + vote).
    
- They both use these disables on each other **on the same day**.
    

Result:

- They **still keep the fact that they caught/found the special animal/item** (because the catch happens before the disable resolves).
    
- But once the disable resolves, **their votes are cancelled** (and their role actions are disabled) for that day.
    

In short: **They can obtain the special find, but the disable prevents them from acting/voting afterward.**


### What is kept on Your Role?
Players can be given special items, but what happens if you are kicked off or killed and then brought back?
- The Machete From Hell will be lost
- The Special Clothes from the Tailor will be lost
- The Cook's food will be lost
- The Farmer will keep the Notch Apple, nothing else
- The Fisher will keep Moby Dick's Harpoon, nothing else
- The Hunter will keep Sif, The Great Grey Wolf, nothing else

What if I was role swapped or taught a different role and then became that role again?
- Everything will be lost


### Disqualifications
If you break any of the following rules, I will give you a warning, but if you continue I will disqualify you from the current Island game.

No NSFW media or Explicit Content
- I don't want the server filled with any NSFW content as it doesn't have a place here
No Screenshots
- No Screenshotting Private Channels! You cannot screenshot any PRIVATE conversations with the Game Makers or other survivors. 
No Hazing
- I want people to be welcomed to play the game, if I sense that there is actual hostility from you, I will disqualify you as it that isn't the spirit of the game. The game is suppose to be fun for all!
`,G={class:"rules-page"},V={class:"rules-hero"},z={class:"hero-copy"},J={class:"hero-panel"},q={class:"search-row"},O={class:"meta-row"},U={key:0},Y={class:"rules-layout"},j={class:"rules-library","aria-label":"Rules guidebook"},L={class:"file-card active",type:"button"},K={class:"file-copy"},Q={key:0,class:"search-brief"},X={class:"contents-panel","aria-label":"Rules contents"},Z={class:"contents-head"},ee=["onClick"],ne={class:"rules-reader"},te={class:"rules-document"},oe={class:"document-hero"},ae={key:0,class:"rules-flavor"},se=["innerHTML"],le=x({__name:"TheIslandNewRules",setup(ie){const l=E("");I.use({gfm:!0,breaks:!1});const u=d(()=>"Rules of the Island"),f=d(()=>c.replace(/^#{1,6}\s+.+$/gm,"").split(/\n\s*\n/).map(n=>m(n).trim()).find(n=>n&&!n.startsWith("---"))??""),F=d(()=>p.value.length),p=d(()=>b(c).headings),y=d(()=>{const t=l.value.trim();if(!t)return 0;const n=new RegExp(v(t),"gi");return c.match(n)?.length??0}),C=d(()=>{const t=I.parse(b(c).markdown),n=l.value.trim();return n?S(t,n):t});function P(){l.value=""}function T(t){document.getElementById(t)?.scrollIntoView({behavior:"smooth",block:"start"})}function m(t){return t.replace(/`([^`]+)`/g,"$1").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/^[-*]\s+/gm,"").replace(/^#{1,6}\s+/gm,"")}function v(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function S(t,n){const o=new RegExp(`(${v(n)})`,"gi");return t.split(/(<[^>]+>)/g).map(s=>s.startsWith("<")?s:s.replace(o,"<mark>$1</mark>")).join("")}function b(t){const n=new Map,o=[],s=t.replace(/^(#{1,4})\s+(.+)$/gm,(re,w,g)=>{const k=_(g,n);return o.push({id:k,title:m(g).replace(/:$/,""),depth:w.length}),`${w} <span id="${k}" class="rules-anchor"></span>${g}`});return{headings:o,markdown:s}}function R(t){return m(t).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function _(t,n){const o=R(t)||"section",s=n.get(o)??0;return n.set(o,s+1),s?`${o}-${s+1}`:o}return(t,n)=>(r(),i(H,null,[A(B),e("div",G,[e("header",V,[e("div",z,[n[1]||(n[1]=e("p",{class:"eyebrow"},"Island Guidebook",-1)),e("h1",null,a(u.value),1),n[2]||(n[2]=e("p",null," A navigable field guide for Island law, day flow, health, food, voting, and end-of-day resolution procedures. ",-1))]),e("div",J,[n[4]||(n[4]=e("div",{class:"guide-bar"},[e("span"),e("span"),e("span"),e("strong",null,"GUIDE SEARCH")],-1)),n[5]||(n[5]=e("label",{for:"rules-search"},"Search the guidebook",-1)),e("div",q,[W(e("input",{id:"rules-search","onUpdate:modelValue":n[0]||(n[0]=o=>l.value=o),class:"search",type:"text",placeholder:"Search cooldown, starvation, tie...",spellcheck:"false"},null,512),[[N,l.value]]),l.value?(r(),i("button",{key:0,class:"clear-btn",type:"button",onClick:P}," Clear ")):h("",!0)]),e("div",O,[n[3]||(n[3]=e("span",null,"Island Rules",-1)),e("span",null,a(F.value)+" sections",1),l.value?(r(),i("span",U,a(y.value)+" matches",1)):h("",!0)])])]),e("main",Y,[e("aside",j,[e("button",L,[n[6]||(n[6]=e("span",{class:"file-mark"},"R",-1)),e("span",K,[e("strong",null,a(u.value),1),e("em",null,a(f.value),1)])]),l.value?(r(),i("div",Q,[n[7]||(n[7]=e("p",null,"Search active",-1)),e("strong",null,a(y.value),1),e("span",null,"matching occurrence"+a(y.value===1?"":"s"),1)])):h("",!0),e("nav",X,[e("div",Z,[n[8]||(n[8]=e("span",null,"Contents",-1)),e("strong",null,a(p.value.length),1)]),(r(!0),i(H,null,M(p.value,o=>(r(),i("button",{key:o.id,type:"button",class:D(["contents-link",`depth-${o.depth}`]),onClick:s=>T(o.id)},a(o.title),11,ee))),128))])]),e("section",ne,[e("article",te,[e("div",oe,[e("div",null,[n[9]||(n[9]=e("p",{class:"rules-type"},"Island Rules",-1)),e("h2",null,a(u.value),1),f.value?(r(),i("p",ae,a(f.value),1)):h("",!0)])]),e("div",{class:D(["markdown-body",{searching:!!l.value}]),innerHTML:C.value},null,10,se)])])])])],64))}}),ue=$(le,[["__scopeId","data-v-0a6d5095"]]);export{ue as default};
