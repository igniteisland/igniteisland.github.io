import{u as re,b as o,d as g,e as le,y as he,w as ce,c as s,m as de,a as n,f as c,j as O,v as x,t as i,n as M,k as ue,F as X,r as me,p as ye,z as fe,l as ge,A as W,o as r,_ as pe}from"./index-B9K-315X.js";import{k as U}from"./marked.esm-B5D8JARp.js";import{n as Te}from"./TheIslandNavbar-CKV16x0t.js";import{d as Ae}from"./islandDb--DyrRePf.js";const ve=`## Overview & Lore

The **Assassin** is a specialist role built around secrecy, retaliation, targeted kills, and covert theft. The Assassin is trained to survive dangerous situations, avoid detection, and strike only when the right opportunity appears.

The Assassin is said to have been trained by **Cue’s Elite Force**, a former elite unit that has since been disbanded and forced into the games on **The Island**.

The Assassin does not act freely against anyone. Instead, they gain opportunities through **requests**, **retaliation targets**, and special circumstances.

The Assassin can be used for two types of covert work:

- **Assassination**
- **Stealing Items**

The Assassin must also choose the direction they are acting from when poisoning, assassinating, or stealing.

---

# Core Information

- The Assassin has a **25% chance to survive an attack**.
- The Assassin’s **Base Assassination Rate** is **25%**.
- The Assassin’s **Base Steal Chance** is **50%**.
- Failed assassination attempts are **not announced**.
- Failed steal attempts are **not announced globally**.
- Poisons are **not announced**.
- The Assassin can kill or steal from a player who is in **Prison**, unless that player is in a **Sacred Prison**.
- The Assassin must choose a direction when poisoning, assassinating, or stealing.

---

# Assassin Directions

Whenever the Assassin poisons, assassinates, or steals from a player, they must choose the direction they are acting from.

The Assassin may choose one of the following 8 directions:

- North
- North East
- East
- South East
- South
- South West
- West
- North West

Directions may matter for roles or effects that watch, track, block, or reveal where actions come from.

The direction is not globally announced unless another role or effect reveals it.

---

# Assassination Chance

The Assassin’s normal assassination chance starts at:

**Base Assassination Rate: 25%**

This chance can be increased in the following ways.

---

## Machete From Hell

If the Assassin receives the **Machete From Hell**, their Base Assassination Rate increases by **+25%**.

This means their base chance becomes:

**25% → 50%**

This bonus lasts for as long as the Assassin has the **Machete From Hell**.

---

## Poison Bonus

If the assassination target is poisoned that day, the Assassin’s assassination chance increases by:

**+12.5% for each poison affecting that target**

This bonus only applies for that day. It does **not** carry over to the next day.

### Example

- Assassin targets Player A.
- Player A is poisoned once that day.
- Assassin’s chance becomes **25% + 12.5% = 37.5%**.
- If the Assassin has the Machete From Hell, the chance becomes **50% + 12.5% = 62.5%**.

---

# Steal Chance

The Assassin’s normal steal chance starts at:

**Base Steal Chance: 50%**

The Assassin may only steal from valid Assassin targets.

A player becomes a valid steal target through:

- **Hitman Steal Request**
- **Return to Sender**

The Assassin cannot freely steal from any player on The Island.

---

## Poison Steal Bonus

If the steal target is poisoned that day, the Assassin’s steal chance increases by:

**+12.5% for each poison affecting that target**

This bonus only applies for that day.

### Example

- Assassin is requested to steal from Player A.
- Player A is poisoned once that day.
- Assassin’s steal chance becomes **50% + 12.5% = 62.5%**.

---

# Abilities

## Return to Sender

If the Assassin receives votes during the day but is **not kicked off The Island**, then each player who voted for the Assassin becomes a **Return to Sender Target** on the following day.

A **Return to Sender Target** is a player the Assassin may target without needing a request.

Against a Return to Sender Target, the Assassin may choose one of the following:

- Attempt to assassinate them.
- Attempt to steal from them.

---

## How Return to Sender Works

- The Assassin receives votes during the day.
- If the Assassin survives the vote, the Game Host tells the Assassin who voted for them.
- Those players become valid **Return to Sender Targets** on the following day.
- These targets are only valid for that day.
- Once the day ends, they are no longer Return to Sender Targets.

---

## Return to Sender Assassination

The Assassin may attempt to assassinate a Return to Sender Target.

When attempting the assassination, the Assassin must choose the direction they are attacking from.

- Uses the normal assassination chance.
- Poison bonuses still apply.
- Failed attempts are not announced.
- Successful assassinations are globally announced.
- The direction is not globally announced unless another role or effect reveals it.

### Example

\`ASSASSIN attempts to assassinate PLAYER X from the South West.\`

If successful, the global announcement still only says:

\`PLAYER X has been Assassinated\`

---

## Return to Sender Steal

The Assassin may attempt to steal from a Return to Sender Target.

When attempting the steal, the Assassin must choose the direction they are stealing from.

If successful:

- The Assassin steals one stealable item from the target.
- The Assassin keeps the stolen item.

If failed:

- No item is stolen.
- Nothing is globally announced.

This allows the Assassin to retaliate without always needing to kill the player.

### Example

\`ASSASSIN attempts to steal from PLAYER X from the East.\`

---

# Hitman

Players may request that the Assassin perform covert work by contacting a Game Host and naming a target.

The Assassin may receive two types of Hitman requests:

- **Assassination Request**
- **Steal Request**

The request is sent to the Assassin anonymously.

The Assassin is only told:

- The type of request.
- The target.

The Assassin is **not** told the identity of the requester.

---

# Hitman Assassination Request

A player may request that the Assassin kill another player.

## Request Message Example

\`You have been requested to assassinate PLAYER X.\`

---

## Request Rules

- Each player may only make **1 Hitman request per day**.
- The Assassin may receive multiple requests in a single day.
- The Assassin may accept all, some, or none of the requests.
- The Assassin chooses which requests they want to carry out.
- A request only costs the requester Health if the Assassin accepts it.

---

## Cost

If the Assassin accepts the assassination request:

- The requester loses **2 Health Points**.

The requester loses this Health regardless of whether the assassination succeeds or fails.

---

## Hitman Assassination Direction

If the Assassin accepts an assassination request, they must choose the direction they are assassinating from.

---

## If Successful

- The target is assassinated.
- A global announcement is made:

\`PLAYER X has been Assassinated\`

The direction is not globally announced unless another role or effect reveals it.

---

## If Failed

- The target survives.
- Nothing is globally announced.

---

# Hitman Steal Request

A player may request that the Assassin steal from another player.

## Request Message Example

\`You have been requested to steal ITEM from PLAYER X.\`

---

## Request Rules

- Each player may only make **1 Hitman request per day**.
- The Assassin may receive multiple steal requests in a single day.
- The Assassin may accept all, some, or none of the requests.
- A request only costs the requester if the Assassin accepts it.

---

## Cost

If the Assassin accepts the steal request:

- The requester loses **2 Health Points**.

The requester pays this cost regardless of whether the steal succeeds or fails.

---

## Hitman Steal Direction

If the Assassin accepts a steal request, they must choose the direction they are stealing from.

### Example

\`ASSASSIN attempts to steal from PLAYER X from the West.\`

---

## If Successful

- The Assassin steals one stealable item from the target.
- The stolen item is given to the requester.
- The Assassin does **not** keep the item.

---

## If Failed

- No item is stolen.
- The requester still pays the cost.
- Nothing is globally announced.

---

# Stealing Rules

The Assassin may steal items only when stealing from a valid Assassin target.

A player is a valid steal target if they are:

- The target of an accepted **Hitman Steal Request**
- A **Return to Sender Target**

The Assassin cannot freely steal from any player on The Island.

---

# Stealable Item Types

Items fall into two steal categories:

1. **Inventory / Storage Items**
2. **Applied Items**

---

# Inventory / Storage Items

These items can only be stolen if they have **not been used yet** and are still in a player’s inventory, storage, or Pouch.

If one of these items has already been used or applied, it cannot be stolen unless it is also listed under **Applied Items**.

- Lively Lemons
- Tasty Tangerine
- Trippy Tulips

- Luminous Seashell
- Cursed Cuttlefish Ink
- The Black Pearl

- Parlay Prism
- Revelation Quartz

- Octane Stimulant
- Suppressant Dose
- Invisibility Potion

- Ethereal Eagle
- Envious Fox
- Mystical Owl
- Jinxed Jackrabbit

---

# Applied Items

These items can be stolen even if they have already been applied to a player.

If stolen, the item is removed from the target and transferred based on how the steal happened.

## Stealable Applied Items

- Cross Pendant
- Blacksmith Armor
- Sol’s Gauntlets
- DoorDashed Box Combo
- Golden Apple
- Gleaming Sardine Scale
- Karmic Vessel
- Purity Stone
- Sneaky Spinach

---

# Who Receives the Stolen Item?

## Hitman Steal Request

If the Assassin steals through a **Hitman Steal Request**, the stolen item goes to the requester.

The Assassin does not keep the item.

---

## Return to Sender Steal

If the Assassin steals through **Return to Sender**, the Assassin keeps the stolen item.

---

# Failed Steals

If the Assassin fails to steal:

- No item is stolen.
- The requester still pays the cost if it was a Hitman Steal Request.
- Nothing is globally announced.

---

# Stolen Applied Item Rules

If an applied item is stolen:

- The target immediately loses the item’s benefit.
- The item transfers to the new holder.
- If the item has limited duration, the remaining duration carries over.
- If the item cannot logically continue after being stolen, the Game Host decides whether it expires or transfers.

### Example

If the Assassin steals **Blacksmith Armor** from Player X through Return to Sender:

- Player X loses the armor protection.
- The Assassin gains the armor protection for the remaining duration.

### Example

If the Assassin steals **Sol’s Gauntlets** through a Hitman Steal Request:

- The original holder loses the Gauntlets.
- The requester receives the Gauntlets.
- The Assassin does not keep them.

---

# Non-Stealable Items

The Assassin cannot steal:

- Roles
- Buildings
- Permanent upgrades
- Sacred items
- Soul-bound items
- Island-wide effects
- Items already used that are not listed as stealable applied items
- Items currently resolving unless the Game Host allows it

The **Machete From Hell** is not stealable unless the Game Host specifically allows it.

---

# Target Limit Rule

A player marked as a target through **Hitman** or **Return to Sender** can only have one Assassin action attempted against them that day.

This means the Assassin cannot stack multiple actions on the same target.

For example, the Assassin cannot:

- Accept a request to kill Player A and also steal from Player A.
- Use Return to Sender to steal from Player A and also assassinate Player A.
- Steal and assassinate the same player through separate target sources unless the Game Host specifically allows it.

The Assassin must choose how they want to act against that target.

---

# Assassin’s Poison

Once per day, the Assassin may poison a player.

When poisoning a player, the Assassin must choose the direction they are poisoning from.

The Assassin may choose one of the following 8 directions:

- North
- North East
- East
- South East
- South
- South West
- West
- North West

The poison causes the target to lose:

- **1 Health Point**
- **1 Food Point**

If the poisoned player is later targeted for assassination that same day, the Assassin’s assassination chance against that player increases by:

**+12.5% for each poison affecting them**

If the poisoned player is later targeted for stealing that same day, the Assassin’s steal chance against that player increases by:

**+12.5% for each poison affecting them**

This poison bonus does not carry over into future days.

### Example

\`ASSASSIN poisons PLAYER X from the North.\`

The poison direction is not globally announced unless another role or effect reveals it.

---

# Extra Action

If the Assassin receives an **Extra Action**, they may poison again.

This second poison may target:

- The same player, or
- A different player

The normal poison effects still apply.

The Assassin must still choose a direction for the second poison.

The Extra Action does not allow the Assassin to perform an additional assassination or steal attempt unless the Game Host specifically allows it.

---

# Global Announcements

The following Assassin-related events are announced globally:

- \`PLAYER X has been Assassinated\`
- \`ASSASSIN has received the MACHETE FROM HELL\`

The following are **not** globally announced:

- Poison attempts
- Successful poisons
- Poison directions
- Failed assassination attempts
- Assassination directions
- Assassination requests
- Denied assassination requests
- Steal requests
- Denied steal requests
- Successful steals
- Failed steals
- Steal directions

---

# Private Notifications

## Hitman Assassination Request

The Assassin receives:

\`You have been requested to assassinate PLAYER X.\`

If accepted, the requester is told:

\`The Assassin has accepted your assassination request.\`

If denied, the requester may be told:

\`The Assassin did not accept your request.\`

---

## Hitman Steal Request

The Assassin receives:

\`You have been requested to steal from PLAYER X.\`

If accepted, the requester is told:

\`The Assassin has accepted your steal request.\`

If successful, the requester is told:

\`The Assassin successfully stole ITEM from PLAYER X for you.\`

If failed, the requester is told:

\`The Assassin failed to steal from PLAYER X.\`

---

## Return to Sender

If the Assassin survives a vote, the Game Host tells the Assassin:

\`The following players voted for you: PLAYER X, PLAYER Y.\`

Those players become valid **Return to Sender Targets** for the next day.

---

# Interrogation and Luminous Shell Information

If the Assassin is revealed through a successful **Interrogation** or **Luminous Shell**, the information given depends on what the Assassin is doing.

Possible current-day information:

- \`ASSASSIN is poisoning PLAYER X from DIRECTION\`
- \`ASSASSIN has accepted request to kill PLAYER X\`
- \`ASSASSIN is assassinating PLAYER X from DIRECTION\`
- \`ASSASSIN has accepted request to steal from PLAYER X\`
- \`ASSASSIN is stealing from PLAYER X from DIRECTION\`
- \`ASSASSIN is voting for PLAYER X\`

Only **accepted** requests are revealed.

Requests that were made but not accepted are not revealed.

---

# Interrogator-Only Information

The Interrogator may also receive information about what the Assassin did on the previous day.

Possible previous-day information:

- \`ASSASSIN poisoned PLAYER X from DIRECTION\`
- \`ASSASSIN accepted request to kill PLAYER X\`
- \`ASSASSIN attempted to assassinate PLAYER X from DIRECTION\`
- \`ASSASSIN accepted request to steal from PLAYER X\`
- \`ASSASSIN stole from PLAYER X from DIRECTION\`
- \`ASSASSIN had voted for PLAYER X\`

Again, only **accepted** requests are mentioned.

Requests that were denied or ignored are not mentioned.`,Ee=`## Overview & Lore

The **Bard** arrived on **The Island** with no verified past.

No background check was ever completed, mostly because every story they told sounded believable enough to be true.

Some believe the Bard is nothing more than a wandering performer trying to lift the spirits of The Island. Others believe they are a dangerous manipulator who hides their intentions behind music, stories, and charm.

Whether the Bard is harmless or dangerous depends entirely on how they choose to perform.

The Bard’s power comes from influence. Their songs can shift the skies, their music can restore hope, and their stories can spread lies convincing enough to change what players believe.

---

# Core Information

The Bard may choose to either **play music** or **tell a story** when using their role.

This choice is mostly for flavor and does not change the mechanical effect of the ability.

What matters is **why** the Bard is performing.

The Bard may use their performance to:

- Influence the next day’s weather
- Heal and encourage another survivor
- Spread false information through Sedition

The Bard’s abilities are based around morale, manipulation, and public perception.

---

# Performance Types

The Bard may flavor their action as one of the following:

- Playing a song
- Singing a ballad
- Telling a story
- Reciting a poem
- Performing a legend
- Spreading a rumor

The flavor of the performance does not change the effect unless the Game Host allows it.

### Example

The Bard may say they are telling a story like **Dante’s Inferno**, but the story itself does not change the effect. It is only flavor for the action.

---

# Abilities

## Ballad

The Bard performs a song or story that calls upon the sky and influences the weather for the following day.

The Bard chooses one preferred weather event.

That chosen weather has a **50% chance** of happening the next day.

If the **Weather Rock** has been built, the Bard’s chosen weather is guaranteed to happen instead.

---

## Harmonize

The Bard chooses one survivor and raises their morale through music, storytelling, or encouragement.

That survivor gains:

- **2 Health Points**

This ability is meant to help keep another survivor alive by restoring their will to continue.

Harmonize cannot raise a survivor above their maximum Health unless another effect allows it.

If the **Weather Rock** has been built, the Bard is allowed to Harmonize twice, even on the same person.

---

## Sedition

The Bard spreads a believable lie through music, storytelling, rumor, or manipulation.

When using Sedition, the Bard may create **one false piece of information**.

This false information may be delivered in one of three ways:

1. As a fake global announcement
2. As a private message sent to one player
3. As an alteration to private information another role would have received

Sedition does not change what actually happened.

It only changes what players are told.

---

# How Sedition Works

## Fake Global Announcement

The Bard may create a fake global announcement.

This announcement appears alongside real global announcements and is **not marked as false**.

### Example

\`The Blacksmith is giving Armor to PLAYER X.\`

This does not mean the Blacksmith actually gave Armor to that player.

It only means the Bard successfully made The Island believe that information may be true.

---

## Fake Private Information

The Bard may send false information privately to one player.

This can be used to mislead a player into believing something happened, even if it did not.

### Example

\`The Assassin is targeting PLAYER X.\`

This does not confirm that the Assassin is actually targeting that player.

---

## Altered Private Intel

The Bard may alter information that a player would have received from another role or effect.

This works especially well against roles or effects that gather information, such as:

- Nightguard
- Interrogator
- Luminous Shell
- Assassin-related information
- Other private Host-given intel

### Example Real Intel

\`ASSASSIN is poisoning PLAYER X.\`

### Example Altered Intel

\`ASSASSIN is poisoning PLAYER Y.\`

In this case, the Assassin still poisoned Player X.

The Bard only changed what the receiving player was told.

---

# Sedition Restrictions

Sedition can change what players believe, but it cannot change what actually happened.

The Bard cannot use Sedition to fake or alter:

- Deaths
- Eliminations
- Vote totals
- Official rule changes
- A player being kicked off The Island
- A role being removed from the game
- Health changes
- Food changes
- Disease effects
- Any other real game-state change

Sedition also cannot force another player to take an action.

It only creates or alters information.

---

# Sedition Allowed Examples

The Bard may create or alter messages like:

- \`The BLACKSMITH is giving Armor to PLAYER X.\`
- \`The NIGHTGUARD saw the Cannibal.\`
- \`ASSASSIN is poisoning PLAYER Y.\`
- \`The INTERROGATOR learned that PLAYER X voted for PLAYER Y.\`
- \`The SCAVENGER found an artifact.\`
- \`The TAILOR is making a Pouch for PLAYER X.\`

These are allowed because they affect information, not the actual game state.

---

# Sedition Not Allowed Examples

The Bard may not create or alter messages like:

- \`PLAYER X has died.\`
- \`PLAYER X has been kicked off The Island.\`
- \`PLAYER X received 6 votes.\`
- \`PLAYER X lost 3 Health Points.\`
- \`PLAYER X lost 2 Food Points.\`

These are not allowed because they would falsely change official game results, stats, rules, or eliminations.

---

# Extra Action

If the Bard receives an **Extra Action**, they may perform one additional Bard ability that day.

The second ability must be different from the first unless the Game Host allows otherwise.

### Example

The Bard uses **Harmonize** on Player X.

With an Extra Action, the Bard may also use **Ballad** or **Sedition**.

---

# Global Announcements

The following Bard actions are globally announced:

- \`BARD is playing SONG to make the Weather SELECTED WEATHER\`
- \`BARD is playing SONG to boost the morale of PLAYER X\`
- \`BARD is storytelling STORY\`

The \`STORY\` is for flavor. It does not need to be the actual false message being sent.

### Examples

- \`BARD is playing Ballad to make the Weather Rain\`
- \`BARD is playing Harmonize to boost the morale of PLAYER X\`
- \`BARD is storytelling Dante's Inferno\`

---

# Sedition Announcement Notes

When the Bard uses Sedition, the public announcement may only say that the Bard is storytelling.

The actual false information may be sent privately or inserted into announcements depending on how Sedition is being used.

### Example

Global announcement:

\`BARD is storytelling Dante's Inferno\`

Private false message sent to Player X:

\`ASSASSIN is poisoning PLAYER Y.\`

The story title is only flavor and does not have to reveal the actual lie.

---

# Interrogation and Luminous Seashell Information

If the Bard is revealed through a successful **Interrogation** or **Luminous Seashell**, possible information includes:

- \`BARD is playing SONG to make the Weather SELECTED WEATHER\`
- \`BARD is playing SONG to boost the morale of PLAYER X\`
- \`BARD is storytelling to PLAYER X\`
- \`BARD is voting for PLAYER X\`

### Examples

- \`BARD is playing Ballad of the Skies to make the Weather Rain\`
- \`BARD is playing Harmonize to boost the morale of PLAYER X\`
- \`BARD is storytelling to PLAYER X\`
- \`BARD is voting for PLAYER Y\`

---

# Interrogator-Only Information

The Interrogator may also receive information about what the Bard did on the previous day.

Possible previous-day information:

- \`BARD voted for PLAYER X\`
- \`BARD told a story to PLAYER X\`
- \`BARD used Sedition to say X\`
- \`BARD played SONG to make the Weather SELECTED WEATHER\`
- \`BARD played SONG to boost the morale of PLAYER X\`

### Examples

- \`BARD voted for PLAYER X\`
- \`BARD told a story to PLAYER Y\`
- \`BARD used Sedition to say ASSASSIN is poisoning PLAYER X\`
- \`BARD played Ballad to make the Weather Rain\`
- \`BARD played Harmonize to boost the morale of PLAYER X\``,Ie=`## Overview & Lore

The **Blacksmith** can forge weapons, armor, and strange tools for the players on **The Island**.

Unlike roles that rely on science or medicine, the Blacksmith’s work is closer to the occult. Their creations are not ordinary equipment. Every item they forge carries a strange power, and some of those powers can completely change how dangerous a player becomes.

The Blacksmith is mainly a support role, but the items they create can heavily influence survival, investigation, and assassination attempts.

The Blacksmith’s most dangerous creation is the **Machete From Hell**, a weapon powerful enough to strengthen certain roles, but unstable enough that it always returns to its maker at the end of the day.

---

# Core Information

The Blacksmith may choose what they want to forge or hand out each day.

However, the **Machete From Hell** is special.

If the Blacksmith is working with the **Machete From Hell**, they cannot use their other Blacksmith abilities that day.

This means the Blacksmith must choose between:

- Forging the **Machete From Hell**
- Giving out the **Machete From Hell**
- Giving out **Blacksmith’s Armor**
- Giving out the **Lantern**
- Giving out **Sol’s Gauntlets**

The Blacksmith cannot do more than one of these on the same day unless they receive an **Extra Action**.

---

# Passive Ability

## Blacksmith’s Own Armor

The Blacksmith always wears their own armor.

This armor is permanent and does not expire.

The Blacksmith’s armor increases their chance of surviving an attack by:

- **+45% survival chance normally**
- **+75% survival chance with the Teacher Buff**

This armor only applies to the Blacksmith and does not need to be handed out.

---

# Abilities

## Machete From Hell

The **Machete From Hell** is the Blacksmith’s most dangerous creation.

It takes **1 full day** to forge.

Only **1 Machete From Hell** can exist at a time.

The Machete From Hell can only be wielded by certain roles:

- Assassin
- Nightguard
- Interrogator

The Machete From Hell does not permanently stay with the player who receives it.

At the end of each day, the Machete From Hell returns to the Blacksmith.

---

# How Forging the Machete Works

The Machete From Hell requires a full day of work.

On the day the Blacksmith chooses to forge it, they cannot hand out armor, the Lantern, or Sol’s Gauntlets.

The Machete becomes available on the following day.

### Example

On **Day 2**, the Blacksmith chooses to forge the Machete From Hell.

The Blacksmith does not give out armor, Lantern, or Gauntlets on Day 2.

On **Day 3**, the Machete From Hell is ready.

The Blacksmith may then choose to give it to an eligible player.

---

# Giving Out the Machete

Giving the **Machete From Hell** to a player counts as the Blacksmith’s main action for that day.

This means if the Blacksmith gives out the Machete, they cannot also give out armor, the Lantern, or Sol’s Gauntlets that same day unless they receive an **Extra Action**.

Once the Machete is given to an eligible role, that player may use it for that day.

At the end of the day, the Machete automatically returns to the Blacksmith.

The player holding the Machete does not keep it permanently.

The Blacksmith may give the Machete to:

- The same eligible player again the next day
- A different eligible player the next day
- No one, if they choose not to hand it out

---

# Returning the Machete

The **Machete From Hell** returns to the Blacksmith at the end of every day.

This happens even if:

- The holder survives
- The holder does not use it
- The holder wants to keep it
- The holder is still on The Island
- The same player may receive it again the next day

If the holder is killed or kicked off The Island during the day, the Machete still returns to the Blacksmith at the end of the day.

The Machete does not leave the game unless a specific effect destroys it or removes it.

---

## Machete Example

On **Day 2**, the Blacksmith gives the **Machete From Hell** to the Assassin.

The Assassin has the Machete for Day 2.

At the end of Day 2, the Machete returns to the Blacksmith.

On **Day 3**, the Blacksmith may give the Machete to:

- The Assassin again
- The Nightguard
- The Interrogator
- Or no one

This keeps the Blacksmith in control of the Machete each day.

---

# Lantern

The Blacksmith may give the **Lantern** to one player.

A player holding the Lantern becomes easier for the **Nightguard** to notice.

The Nightguard can spot that player from any direction.

If the Lantern holder is attacked, attacks, or poisons someone, the Nightguard will be able to see it.

### Example

The Blacksmith gives the Lantern to Player X.

That night, Player X attacks another player.

The Nightguard can see that Player X was involved, regardless of direction.

---

# Sol’s Gauntlets

The Blacksmith may give **Sol’s Gauntlets** to one player.

Sol’s Gauntlets allow the wearer to handle **Celium** without suffering the normal consequences.

The Gauntlets may be given to the same player again on another day.

These gauntlets are based on Sol’s design. Without protection like this, Celium was known to cause nosebleeds and other side effects after excessive use.

Roles who don't need this: 
- Chemist
- Guru
- Medic
Those Roles can handle Celium without severe consequence

---

# Blacksmith’s Armor

The Blacksmith may give armor to one player.

That player gains an increased chance to survive an attack.

The armor gives:

- **+45% survival chance normally**
- **+75% survival chance with the Teacher Buff**

Armor only lasts for one day.

The next day, the armor is gone, and the Blacksmith must choose again who receives armor.

The Blacksmith may give armor to the same player on multiple days.

---

# Extra Action

If the Blacksmith receives an **Extra Action**, they may hand out armor to one additional player.

The extra armor cannot be given to the same player who already received armor that day.

### Example

The Blacksmith gives armor to Player X.

If the Blacksmith has an Extra Action, they may also give armor to Player Y.

They cannot give both armor actions to Player X.

---

# Extra Action and the Machete From Hell

The Machete From Hell is not a free bonus action.

If the Blacksmith chooses to forge or give out the Machete, that uses their main Blacksmith action for the day.

If the Blacksmith receives an **Extra Action**, the Game Host may allow the Blacksmith to also give out another Blacksmith item that day.

### Example

The Blacksmith gives the Machete From Hell to the Assassin.

With an Extra Action, the Blacksmith may also give armor to Player X.

The Blacksmith still cannot give the Machete to more than one player in the same day.

Only **1 Machete From Hell** can exist, and it can only be held by one eligible player at a time.

---

# Daily Action Restrictions

The Blacksmith must choose carefully each day.

Normally, the Blacksmith may only choose **one** main action:

- Forge the Machete From Hell
- Give the Machete From Hell to an eligible player
- Give armor to a player
- Give the Lantern to a player
- Give Sol’s Gauntlets to a player

The Machete From Hell is not a free bonus action.

If the Blacksmith chooses to forge it or give it out, that is their Blacksmith action for the day.

---

# Global Announcements

The following Blacksmith actions are globally announced:

- \`BLACKSMITH is giving armor to PLAYER X\`
- \`BLACKSMITH has crafted the MACHETE FROM HELL\`
- \`BLACKSMITH has given the MACHETE FROM HELL to PLAYER X\`

The following may be announced if the Game Host wants the return to be public:

- \`The MACHETE FROM HELL has returned to the BLACKSMITH\`

The Lantern and Sol’s Gauntlets do not need to be globally announced unless the Game Host decides otherwise.

---

# Interrogation and Luminous Shell Information

If the Blacksmith is revealed through a successful **Interrogation** or **Luminous Shell**, possible information includes:

- \`BLACKSMITH is giving armor to PLAYER X\`
- \`BLACKSMITH has crafted the MACHETE FROM HELL\`
- \`BLACKSMITH is giving the MACHETE FROM HELL to PLAYER X\`
- \`BLACKSMITH is giving the Lantern to PLAYER X\`
- \`BLACKSMITH is giving Sol's Gauntlets to PLAYER X\`
- \`BLACKSMITH is voting for PLAYER X\`

---

# Interrogator-Only Information

The Interrogator may also receive information about what the Blacksmith did on the previous day.

Possible previous-day information:

- \`BLACKSMITH gave armor to PLAYER X\`
- \`BLACKSMITH crafted the MACHETE FROM HELL\`
- \`BLACKSMITH gave the MACHETE FROM HELL to PLAYER X\`
- \`The MACHETE FROM HELL returned to the BLACKSMITH\`
- \`BLACKSMITH gave the Lantern to PLAYER X\`
- \`BLACKSMITH gave Sol's Gauntlets to PLAYER X\`
- \`BLACKSMITH voted for PLAYER X\``,be=`## Overview & Lore

The **Builder** is a master craftsman and architect who greatly increases the survivability of The Island.

Where other roles rely on weapons, medicine, or information, the Builder changes the island itself. They can create shelters, construct special buildings, protect key players, and improve the power of other roles.

The Builder is one of the strongest support roles because their structures can affect the entire game.

---

## Core Information

The Builder can create two types of structures:

1. **Shelter**
2. **Special Builds**

Shelter is built for The Island each day and affects the general survivability of the group.

Special Builds are stronger structures with unique effects.

All Special Builds take **1 full day** to construct.

This means if the Builder starts a Special Build on **Day 1**, it becomes functional on **Day 2**.

---

# Shelter

At the end of each day, the Builder tells the Game Host what kind of **Shelter** they want to build for The Island for the next day.

The Builder can be creative with this.

Examples:

- A tiny shack
- A reinforced cabin
- A watch post
- A mansion
- A hidden bunker

The Game Host decides how effective the shelter is based on what the Builder describes.

For example:

- A tiny shack may count as **Bad Shelter**
- A mansion or reinforced structure may count as **Good Shelter**

Shelter is separate from Special Builds.

---

# Special Builds

Special Builds are powerful structures that take a full day to complete.

The Builder may start one Special Build per day.

If the Builder receives an **Extra Action**, they may start a second Special Build on the same day.

A Special Build is not active on the day construction starts. It becomes active the following day.

---

## Weather Rock

The **Weather Rock** allows the Bard to fully control the weather.

While the Weather Rock is active, the Bard’s chosen weather is guaranteed to happen the following day.

Normally, the Bard only has a **50% chance** to cause their chosen weather. With the Weather Rock, that chance becomes **100%**.

The Weather Rock also strengthens the Bard’s morale-based support.

While the Weather Rock is active, the Bard may boost the morale of **2 players instead of 1** when using their Harmonize ability.

---

## Sacred Jail

The **Sacred Jail** is a powerful prison that completely locks down a player.

A player inside the Sacred Jail:

- Cannot use their role
- Cannot use Secret Roles
- Cannot vote
- Cannot be poisoned
- Cannot be assassinated by the Assassin

This is the only jail that the Assassin cannot break into.

---

## Taller Nightguard Tower

The **Taller Nightguard Tower** improves the Nightguard’s safety and vision.

While this structure is active, the Nightguard is safe from attacks by:

- Assassin
- Werewolf
- Cannibal

The tower also improves the Nightguard’s view of The Island.

The **South Area** of The Island is fully visible to the Nightguard. This means the Cannibal and Werewolf cannot safely attack from the South while the tower is active.

They may only attack from:

- North
- East
- West

---

## Lecture Hall

The **Lecture Hall** improves the Teacher’s ability to help other players.

While the Lecture Hall is active, the Teacher may buff **2 players instead of 1**.

No other part of the Teacher’s ability is changed. Or is it?

---

## Bottomless Box

The **Bottomless Box** is a temporary storage structure that lets The Island save consumables for later use.

The Builder controls the Bottomless Box and decides what goes into it, when items are taken out, and who receives them.

---

# Bottomless Box Rules

## Duration

The Bottomless Box stays on The Island for **3 total days**:

- The day it becomes functional
- The following day

After that, the Bottomless Box disappears.

Any items still inside the Bottomless Box are lost.

Can Only be Built Once

---

## Storage Capacity

The Bottomless Box can hold up to **3 consumables total**.

Only consumables may be stored inside it.

Examples of possible consumables include:

- Crops
- Fish items
- Hunter animals
- Scavenger artifacts
- Other items the Game Host classifies as consumables

---

## Ownership and Control

The Builder controls the Bottomless Box.

The Builder decides:

- Which items are stored
- When stored items are distributed
- Who receives the stored items

The Builder must track what is inside the Bottomless Box.

The Game Host may also track the contents either publicly or secretly.

---

## Daily Distribution Limit

The Builder may distribute up to **3 total consumables per day** from the Bottomless Box.

However, there are strict limits.

Each day:

- The Builder may personally use at most **1** consumable from the Box.
- The Builder may give at most **2** consumables to other players.
- A single player may receive only **1** consumable from the Box per day.

---

## Originator Rule

A player cannot receive an item from the Bottomless Box if they were the original creator or finder of that item.

The **originator** is the player who originally created, found, caught, or gathered the consumable.

Examples:

- A Farmer is the originator of a crop they grew.
- A Fisher is the originator of a fish item they caught.
- A Hunter is the originator of an animal they found.
- A Scavenger is the originator of an artifact they found.
- A Cook is the originator of a meal they made.

A player may only receive an item back from the Bottomless Box if they were **not** the originator of that item.

This prevents players from using the Bottomless Box to safely reclaim their own resources later.

---

## What Can be Store in The Box?

- Lively Lemons
- Tasty Tangerine
- Trippy Tulips
- Sneaky Spinach
- Golden Apple

- Luminous Seashell
- Cursed Cuttlefish Ink
- The Black Pearl

- Parlay Prism
- Revelation Quartz
- Purity Stone
- Karmic Vessel

- Octane Stimulant
- Suppressant Dose
- Invisibility Potion

- Ethereal Eagle
- Envious Fox
- Mystical Owl
- Jinxed Jackrabbit

- DoorDashed Box Combo

# Removing Structures

The Builder may choose to remove a Special Build whenever they want.

They may also stop construction of a Special Build before it is completed.

The Builder may remove multiple Special Builds in a single day.

If the Builder is killed or kicked off The Island, all Builder structures are immediately removed from The Island.

---

# Extra Action

If the Builder receives an **Extra Action**, they may start another Special Build on the same day they already started one.

### Example

The Builder starts construction on the **Weather Rock**.

If the Builder has an Extra Action, they may also start construction on the **Sacred Jail** that same day.

Both builds would become functional the following day.

---

# Global Announcements

The following Builder actions are globally announced:

- \`BUILDER has made SHELTER for The Island\`
- \`BUILDER has started construction of SPECIAL BUILD\`
- \`BUILDER has completed construction of SPECIAL BUILD\`
- \`BUILDER has demolished SPECIAL BUILD\`

Examples:

- \`BUILDER has started construction of Weather Rock\`
- \`BUILDER has completed construction of Sacred Jail\`
- \`BUILDER has demolished Taller Nightguard Tower\`

---

# Interrogation and Luminous Shell Information

If the Builder is revealed through a successful **Interrogation** or **Luminous Shell**, possible information includes:

- \`BUILDER is making SHELTER for The Island tomorrow\`
- \`BUILDER is going to construct SPECIAL BUILD\`
- \`BUILDER is going to demolish SPECIAL BUILD\`
- \`BUILDER is voting for PLAYER X\`

Examples:

- \`BUILDER is going to construct Weather Rock\`
- \`BUILDER is going to demolish Sacred Jail\`

---

## Interrogator-Only Information

The Interrogator may also receive information about what the Builder did on the previous day.

Possible previous-day information:

- \`BUILDER made SHELTER for The Island\`
- \`BUILDER started construction of SPECIAL BUILD\`
- \`BUILDER completed construction of SPECIAL BUILD\`
- \`BUILDER demolished SPECIAL BUILD\`
- \`BUILDER voted for PLAYER X\``,Re=`## Overview & Lore

The **Cannibal** is a Secret Role built around hidden violence, fear, and destruction.

Unlike normal roles, the Cannibal does not act openly. They move through The Island at night, choosing where to strike from and trying to avoid being seen by the Nightguard.

The Cannibal may either attack a survivor or destroy a building, but they cannot do both on the same night.

As long as the Cannibal is not spotted, their identity remains hidden.

---

# Core Information

The Cannibal may use their Secret Role at night.

When using this Secret Role, the Cannibal must choose one of the following actions:

- **Attack a player**
- **Destroy a building**

The Cannibal cannot attack a player and destroy a building on the same night.

The Cannibal must choose a direction when attacking or destroying a building.

The Cannibal may choose from 8 directions:

- North
- North East
- East
- South East
- South
- South West
- West
- North West

The Cannibal does not have to use their Secret Role every night.

However, if the Cannibal does not use their Secret Role for **4 days**, the Cannibal loses the Secret Role.

---

# Cannibal Attack

The Cannibal may choose one player to attack.

When attacking, the Cannibal must choose the direction they are attacking from.

### Example

\`CANNIBAL attacks PLAYER X from the South West.\`

If the target is not protected, the target is killed.

A failed Cannibal attack is globally announced.

---

## Attack Protection

If the target is protected by armor, a role, an item, a building, or another effect, the Cannibal attack may fail.

If the attack fails, the Cannibal’s identity is still kept secret unless another effect reveals them.

The failed attack is announced as:

\`CANNIBAL has failed to kill PLAYER X\`

---

# Destroy Building

Instead of attacking a player, the Cannibal may choose to destroy one building.

When destroying a building, the Cannibal must choose the direction they are destroying it from.

### Example

\`CANNIBAL destroys BUILDING X from the East.\`

If successful, the building is destroyed.

Destroying a building counts as using the Cannibal Secret Role for that night.

The Cannibal cannot attack a player on the same night they destroy a building.

---

## Building Destruction Rules

The Cannibal may destroy one building per Secret Role use.

The building must be a valid building on The Island.

The Cannibal cannot destroy:

- Buildings protected from destruction
- Buildings already destroyed
- Buildings the Game Host rules cannot be targeted

If the building is protected, the destruction fails.

---

# Direction and Detection

The Cannibal must choose a direction for each Secret Role action.

Directions are important because roles such as the **Nightguard** may be able to spot attacks or building destruction from certain directions.

If the Nightguard spots the Cannibal’s action, the Cannibal’s identity will be revealed to the Nightguard

If the Nightguard does not spot the action, the Cannibal’s identity remains secret unless revealed by Interrogation or another effect.

---

# Role Loss

The Cannibal does not have to attack every night.

However, they must use their Secret Role at least once every **4 days**.

Using the Secret Role includes either:

- Attacking a player
- Destroying a building

If the Cannibal does not attack or destroy a building for **4 days**, they lose the Cannibal Secret Role.

---

# Extra Action

No Extra Action can be taken with this Secret Role.

If the Cannibal receives an Extra Action from another source, it cannot be used to perform an additional Cannibal attack or building destruction.

The Cannibal may only use their Secret Role once per night.

---

# Global Announcements

The following Cannibal actions are globally announced:

- \`PLAYER X has been killed by the CANNIBAL\`
- \`CANNIBAL has failed to kill PLAYER X\`
- \`CANNIBAL has destroyed BUILDING X\`
- \`CANNIBAL has failed to destroy BUILDING X\`

The Cannibal’s identity is not included in global announcements.

---

# Successful Interrogation Information

If a player with the Cannibal Secret Role is successfully interrogated, the Interrogator may receive:

\`PLAYER NAME used their Secret Role yesterday\`
`,Se=`## Overview & Lore

The **Chemist** uses raw science to create unstable substances, experimental drugs, and Celium-based compounds.

Trained under **Dr. Logan**, the Chemist learned how to combine normal chemicals with Celium to create powerful effects on the body. These substances can protect survivors, strengthen them, weaken unstable conditions, or alter how they move around The Island.

The Chemist is not a traditional healer like the Medic. Instead, the Chemist creates controlled reactions. Their substances are useful, but often come with a cost.

---

# Core

The Chemist mixes different chemicals with **Celium** to create unique effects.

The Chemist may create and apply **one chemical substance per day**, unless another effect gives them an Extra Action.

Most Chemist substances can be used on any survivor, including the Chemist, unless stated otherwise.

**Can Handle Celium without Severe Consequence**

---

# Abilities

## Gelatin

Known as a **DCA**, Gelatin takes a day to form.

Once formed, the Chemist may chemically bond:

- **2 players**, or
- **3 players if the Chemist is included in the bond**

Bonded players have their **Health and Food stats combined** for one day.

All effects that impact Health or Food on a bonded survivor affect every survivor connected by the bond.

---

## Gelatin Effects

While bonded:

- All bonded survivors share Health and Food effects.
- If one bonded survivor gains Health or Food, all bonded survivors are affected.
- If one bonded survivor loses Health or Food, all bonded survivors are affected.
- All bonded survivors cannot die to night time attacks.

However, if a bonded survivor would have died from a night time attack:

- All bonded survivors lose **3 Health Points**.
- All bonded survivors lose **3 Food Points**.

If any bonded survivor dies at the end of the day:

- Every bonded survivor dies.

If a bonded survivor is kicked off The Island:

- Nothing happens to the other bonded survivors.

**Cooldown:** 3 Days

---

## Octane Stimulant

The Chemist creates a powerful stimulant that forces a survivor’s body beyond normal limits.

Choose one survivor.

For that day, the target gains:

- Immunity to role-blocking effects.
- **+10% role success chance**.
- Protection from being killed by night time attacks.

At the end of the day, the target loses:

- **2 Food Points** due to exhaustion.

### Restriction

Octane Stimulant cannot be used on the same survivor on consecutive days.

---

## Suppressant Dose

The Chemist creates a chemical suppressant that slows a survivor’s body and weakens unstable substances affecting them.

Choose one survivor.

For that day:

- Poison effects applied to the target are reduced by **1**.
- Healing effects applied to the target are reduced by **1**.
- Celium Decay gained by the target is reduced by **1**.

However:

- The target’s role success chance is reduced by **10%**.
- The target cannot receive an Extra Action that day.

Suppressant Dose can protect someone from poison or Celium Decay, but it also makes them sluggish and less effective.

### Restriction

Suppressant Dose cannot be used on the same survivor on consecutive days.

---

## Invisibility Potion

The Chemist creates a potion that temporarily hides a survivor from sight and makes them difficult to track.

Choose one survivor.

For that night:

- The target cannot be spotted by normal watching effects.
- The target cannot be seen moving around The Island.
- The target’s direction cannot be detected.
- The target may spy on one survivor.

When spying, the target may learn one of the following:

- Whether the spied-on survivor used their role.
- Whether the spied-on survivor was targeted.
- Whether the spied-on survivor left their camp.
- The direction one action came from, if applicable.

The spying survivor does **not** learn the target’s role.

The spying survivor does **not** learn exact action details unless the Game Host allows it.

### Restriction

Invisibility Potion cannot be used on the same survivor on consecutive days.

---

# Extra Action

If the Chemist receives an **Extra Action**, they may create and apply one additional chemical substance that day.

The second substance must target a different survivor.

The Chemist cannot use the same chemical twice in one day unless the Game Host allows it.

### Example

The Chemist uses **Octane Stimulant** on Player X.

With an Extra Action, the Chemist may use **Suppressant Dose** or **Invisibility Potion** on Player Y.

The Chemist could not use the second chemical on Player X because they were already targeted by the Chemist that day.

---

# Global Announcements

Most Chemist actions are not globally announced.

The following Chemist actions may be globally announced if the Game Host wants them to be public:

- \`CHEMIST has formed Gelatin between PLAYER X and PLAYER Y\`
- \`CHEMIST has formed Gelatin between PLAYER X, PLAYER Y, and PLAYER Z\`

The following are not normally globally announced:

- Octane Stimulant
- Suppressant Dose
- Invisibility Potion
- Failed or blocked Chemist actions

---

# Interrogation and Luminous Seashell Information

If the Chemist is revealed through a successful **Interrogation** or **Luminous Seashell**, possible information includes:

- \`CHEMIST is forming Gelatin with PLAYER X and PLAYER Y\`
- \`CHEMIST is using Octane Stimulant on PLAYER X\`
- \`CHEMIST is using Suppressant Dose on PLAYER X\`
- \`CHEMIST is using Invisibility Potion on PLAYER X\`
- \`CHEMIST is voting for PLAYER X\`

---

## Interrogator-Only Information

The Interrogator may also receive information about what the Chemist did on the previous day.

Possible previous-day information:

- \`CHEMIST formed Gelatin with PLAYER X and PLAYER Y\`
- \`CHEMIST used Octane Stimulant on PLAYER X\`
- \`CHEMIST used Suppressant Dose on PLAYER X\`
- \`CHEMIST used Invisibility Potion on PLAYER X\`
- \`CHEMIST voted for PLAYER X\``,we=`## Overview & Lore

The **Cook** is able to prepare meals for the players on The Island.

Some meals restore strength, some protect players from danger, and some are made from resources gathered by other survival roles. The Cook is mostly a support role, but they also have access to poison, making them dangerous if they choose to play aggressively.

The Cook’s power depends heavily on what resources are available on The Island.

---

## Core Information

The Cook can make different meals for players on The Island.

Some meals are always available, while others require another role to succeed first.

Certain meals require that specific role to have succeeded in their action.

The Cook may also poison a player.

---

# Abilities

## Gourmet Scorpion Stew

The Cook prepares **Gourmet Scorpion Stew** for multiple players.

This meal restores both Health and Food.

The Cook heals up to **5 players** on The Island.

Each chosen player gains:

- **2 Health Points**
- **2 Food Points**

If there are **5 or more players** on The Island, the Cook must choose **5 players**.

If there are fewer than 5 players remaining, the Cook gives the stew to all remaining eligible players.

---

## DoorDashed Box Combo

**Full name:**  
**DoorDashed Box Combo, no coleslaw, extra toast butter on both sides, extra crispy chicken and fries with a Large Dr. Pepper lite ice**

The Cook may order the DoorDashed Box Combo for a player.

This meal takes **1 day** to arrive.

Once consumed, the player gains immunity from being **kicked off The Island**.

This does **not** protect the player from being killed.

### Rules

- Takes **1 day** to arrive.
- Protects the consumer from being kicked off.
- Does not protect against death.
- Goes on a **4-day cooldown** once ordered.
- Cannot be used in the **Top 4**.
- Cannot be ordered again when it hasn't been used.

### Example

On **Day 2**, the Cook orders the DoorDashed Box Combo.

On **Day 3**, the meal arrives and may be used.

If the protected player receives the most votes, they are not kicked off.

However, they can still be killed by attacks, poison, or other lethal effects.

---

## Shura’s 2am Spaghetti

The Cook prepares **Shura’s 2am Spaghetti**, a chaotic meal that gives the consumer enough energy to survive danger.

This meal takes **1 day** to take effect.

Once active, the consumer gains:

- **+45% chance to survive an attack**

### Example

On **Day 2**, the Cook gives Shura’s 2am Spaghetti to Player X.

On **Day 3**, the effect becomes active.

If Player X is attacked on Day 3, they have an increased chance to survive.

---

## Hunter’s Seasoning

The Cook may make **Hunter’s Seasoning** if the Hunter was successful in their hunt.

The consumer gains:

- **+12.5% attack success chance**

This makes the consumer more dangerous when attempting attacks.

However, too much consumption of Hunter’s Seasoning may cause headaches.

---

## Fisher’s Salty Chips

The Cook may make **Fisher’s Salty Chips** if the Fisher was successful in their catch.

The consumer loses:

- **1 Food Point**

However, the salt absorbs poison and converts it into healing instead.

If the consumer would be poisoned, the poison does not harm them. Instead, the poison becomes a healing effect.

Too much consumption of Fisher’s Salty Chips may cause poor eyesight.

---

## Farmer’s Roots

The Cook may make **Farmer’s Roots** if the Farmer was successful in their harvest.

The consumer gains stability and focus.

While affected by Farmer’s Roots:

- The consumer can see through lies.
- The consumer’s actions cannot be seen through Interrogation.
- The consumer’s actions cannot be seen through Luminous Shell.

Too much consumption of Farmer’s Roots may cause sluggishness.

---

## Cook’s Poison

The Cook may poison one player.

Must Choose to poison from 1 of the 8 directions:
- North
- North East
- East
- South East
- South
- South West
- West
- North West

The poisoned player loses:

- **1 Health Point**
- **2 Food Points**

This gives the Cook a harmful option in addition to their support meals.

---

# Extra Action

If the Cook receives an **Extra Action**, they may choose one of the following:

1. Poison another player.
2. Make another Special Meal.

If the Cook uses the Extra Action to poison, they cannot poison the same player twice that day.

If the Cook uses the Extra Action to make another Special Meal, they may not use it to order another DoorDashed Box Combo if:

- A DoorDashed Box Combo was already ordered that day, or
- The DoorDashed Box Combo is currently on cooldown.

---

# Global Announcements

The following Cook actions are globally announced:

- \`COOK has made SPECIAL MEAL\`
- \`COOK has ordered the DOORDASHED BOX COMBO\`
- \`COOK has given GOURMET SCORPION STEW to SELECTED PLAYERS\`
- \`COOK has given SPECIAL MEAL to PLAYER X\`

Examples:

- \`COOK has made Shura's 2am Spaghetti\`
- \`COOK has ordered the DOORDASHED BOX COMBO\`
- \`COOK has given GOURMET SCORPION STEW to selected players\`
- \`COOK has given Fisher's Salty Chips to PLAYER X\`

Cook poison is not listed as a global announcement unless the Game Host decides otherwise.

---

# Interrogation and Luminous Shell Information

If the Cook is revealed through a successful **Interrogation** or **Luminous Shell**, possible information includes:

- \`COOK is giving GOURMET SCORPION STEW to SELECTED PLAYERS\`
- \`COOK is giving SPECIAL MEAL to PLAYER X\`
- \`COOK is ordering DOORDASHED BOX COMBO\`
- \`COOK is poisoning PLAYER X\`
- \`COOK is voting for PLAYER X\`

Examples:

- \`COOK is giving Shura's 2am Spaghetti to PLAYER X\`
- \`COOK is giving Hunter's Seasoning to PLAYER X\`
- \`COOK is poisoning PLAYER X\`

---

## Interrogator-Only Information

The Interrogator may also receive information about what the Cook did on the previous day.

Possible previous-day information:

- \`COOK gave GOURMET SCORPION STEW to SELECTED PLAYERS\`
- \`COOK gave SPECIAL MEAL to PLAYER X\`
- \`COOK ordered DOORDASHED BOX COMBO\`
- \`COOK poisoned PLAYER X\`
- \`COOK voted for PLAYER X\``,Pe=`## Overview & Lore

The **Farmer** is able to grow Special Crops that give powerful effects to players on The Island.

Some crops heal, some protect, some disrupt, and some can completely change the outcome of a day. The Farmer is a strong support role, but their strength depends on successful harvests, weather conditions, and careful planning.

The Farmer’s crops are useful because they can be grown, stored, and used at the right moment.

---

## Core Information

The Farmer may plant **1 Special Crop each day**.

Each Special Crop has a base success rate. This means the crop is not always guaranteed to grow unless stated otherwise.

The Farmer may either:

- Use the crop on themselves
- Give the crop to another player
- Store the crop for a later day

The Farmer can only store **1 Special Crop** at a time.

---

# Special Crops

## Sneaky Spinach

**Base Success Rate:** 50%

Sneaky Spinach makes the consumer harder to find at night.

The consumer becomes immune to nighttime attacks from:

- Cannibal
- Werewolf

However, this does **not** protect the consumer from the Assassin.

The Assassin can see through Sneaky Spinach.

Sneaky Spinach does not protect against any other effects unless the Game Host rules otherwise.

---

## Lively Lemons

**Base Success Rate:** 70%

Lively Lemons make the consumer energetic enough to perform an **Extra Action** that day.

The Farmer may only use up to **2 Lively Lemons in one day**.

This limit applies no matter how the Farmer gained access to the Lively Lemons.

### Example

The Farmer has one stored Lively Lemon and grows another Lively Lemon that same day.

The Farmer may use both that day.

The Farmer cannot use a third Lively Lemon that same day.

---

## Tasty Tangerine

**Base Success Rate:** 70%

Tasty Tangerine restores the consumer’s Health and Food.

The consumer gains:

- **3 Health Points**
- **3 Food Points**

---

## Trippy Tulips

**Base Success Rate:** 70%

Trippy Tulips make the consumer unable to act properly for the day.

The consumer:

- Cannot perform their role
- Cannot vote

This crop is useful for stopping dangerous players from acting or voting.

---

## Golden Apple

**Base Success Rate:** 100%

The **Golden Apple** is the Farmer’s strongest crop.

The consumer becomes invincible for one day.

While affected by the Golden Apple, the consumer is immune to:

- Dying
- Taking damage
- Being kicked off The Island

The consumer also fully restores:

- Health
- Food

---

# Golden Apple Growth Rules

The Golden Apple is guaranteed to grow, but it takes much longer than other crops.

The Golden Apple takes **3 Active Days** to grow.

Only **1 Golden Apple** can be grown.

An **Active Day** is a day where the Farmer is able to fully use their role.

A day does **not** count as an Active Day if the Farmer is:

- Jailed
- Weakened
- Role blocked
- Disabled by another effect
- Otherwise unable to use their role

The 3 Active Days do **not** have to be consecutive.

### Example

The Farmer starts growing the Golden Apple on Day 2.

Day 2 counts as Active Day 1.

On Day 3, the Farmer is jailed, so Day 3 does not count.

On Day 4, the Farmer can act again, so Day 4 counts as Active Day 2.

The Golden Apple continues growing until the Farmer reaches 3 total Active Days.

---

## Golden Apple Top 5 Rule

The Golden Apple rots in the **Top 5**.

This means it cannot be used once The Island reaches the Top 5.

Before the Top 5, the Golden Apple does not rot.

---

# Storing Crops

The Farmer may store **1 Special Crop** for a later day.

A stored crop may be used on a later day without preventing the Farmer from planting a new crop that day.

This means the Farmer can use both:

- The stored crop
- The crop grown that same day

### Example

On Day 1, the Farmer successfully grows Tasty Tangerine and stores it.

On Day 2, the Farmer plants and grows Sneaky Spinach.

The Farmer may use both the stored Tasty Tangerine and the newly grown Sneaky Spinach on Day 2.

---

# Weather Effects

Weather can affect the Farmer’s chance of successfully growing crops.

The base success rate of each crop is adjusted by the current weather.

## Weather Modifiers

- **Hot:** +10% success chance
- **Cold:** No change
- **Rainy:** No change
- **Clear:** No change
- **Freezing:** -20% success chance
- **Heat Wave:** -20% success chance

### Example

Sneaky Spinach normally has a 50% success rate.

If the weather is Hot, the chance becomes:

**50% + 10% = 60%**

If the weather is Freezing, the chance becomes:

**50% - 20% = 30%**

---

# Old McDonald’s Overalls

If the Farmer receives **Old McDonald’s Overalls**, their harvests are guaranteed to succeed regardless of weather.

While the Farmer has Old McDonald’s Overalls:

- Weather penalties do not matter.
- Weather bonuses are unnecessary.
- The Farmer’s Special Crops always grow successfully.

---

# Extra Action

If the Farmer receives an **Extra Action**, they may grow another Special Crop that day.

The Farmer may then:

- Use it that same day
- Give it to another player
- Store it, if they do not already have a stored crop

The Extra Action does **not** speed up the Golden Apple.

The Golden Apple still only gains progress from Active Days.

---

# Global Announcements

The following Farmer actions are globally announced:

- \`FARMER has successfully grown SPECIAL CROP\`
- \`FARMER has failed to grow SPECIAL CROP\`
- \`FARMER has given SPECIAL CROP to PLAYER X\`
- \`FARMER has used SPECIAL CROP\`
- \`FARMER has started growing the GOLDEN APPLE\`
- \`FARMER has received Old McDonald's Overalls\`

Examples:

- \`FARMER has successfully grown Tasty Tangerine\`
- \`FARMER has failed to grow Sneaky Spinach\`
- \`FARMER has given Lively Lemons to PLAYER X\`
- \`FARMER has used Sneaky Spinach\`
- \`FARMER has started growing the GOLDEN APPLE\`

When the Farmer gives a crop to a player, that means the crop’s ability is being used on that player.

When the Farmer uses a crop, that means the Farmer is using the crop on themselves.

---

# Interrogation and Luminous Shell Information

If the Farmer is revealed through a successful **Interrogation** or **Luminous Shell**, possible information includes:

- \`FARMER is growing SPECIAL CROP\`
- \`FARMER is giving SPECIAL CROP to PLAYER X\`
- \`FARMER is using SPECIAL CROP\`
- \`FARMER is voting for PLAYER X\`

Examples:

- \`FARMER is growing Lively Lemons\`
- \`FARMER is giving Tasty Tangerine to PLAYER X\`
- \`FARMER is using Sneaky Spinach\`
- \`FARMER is voting for PLAYER X\`

---

## Interrogator-Only Information

The Interrogator may also receive information about what the Farmer did on the previous day.

Possible previous-day information:

- \`FARMER grew SPECIAL CROP\`
- \`FARMER failed to grow SPECIAL CROP\`
- \`FARMER gave SPECIAL CROP to PLAYER X\`
- \`FARMER used SPECIAL CROP\`
- \`FARMER started growing the GOLDEN APPLE\`
- \`FARMER voted for PLAYER X\``,Le=`## Overview & Lore

The **Fisher** is able to cast their lure into the ocean and pull up strange Special Items from the waters surrounding The Island.

Some of these items protect players, some disrupt enemies, and some connect the Fisher to dangerous Sea Beasts. The Fisher is not guaranteed to catch something every day, but the items they find can be extremely powerful when used at the right time.

The Fisher is also connected to The Island’s food supply, but their Special Items can still be caught even if food cannot be gained.

---

## Core Information

The Fisher may fish for **1 Special Item each day**.

Each Special Item has a base catch rate. This means the Fisher is not guaranteed to catch an item unless they have a special effect that guarantees a catch.

If the Fisher successfully catches a Special Item, they may choose to:

- Use it on themselves
- Give it to another player
- Store it for a later day

The Fisher may only store **1 Special Item** at a time.

---

# Food Rule

The Fisher is dependent on the **Cook** to help provide food for The Island.

If the Cook exists on The Island, the Fisher may help contribute food through fishing.

If there is no Cook on The Island, the Fisher does **not** provide food.

However, the Fisher can still cast their line and catch Special Items even if the Cook is not there.

---

# Special Items

## Luminous Seashell

**Base Catch Rate:** 15%

The **Luminous Seashell** allows the Fisher to see what a player is planning to do that day.

When used, the Fisher chooses one player.

The Fisher learns:

- What action that player will take
- Who that player will vote for

This information applies to the day the Luminous Seashell is used.

The global announcement only says that the Luminous Seashell was used. It does not reveal who it was used on.

---

## Gleaming Sardine Scale

**Base Catch Rate:** 15%

The **Gleaming Sardine Scale** protects the consumer from an attack.

The consumer gains:

- **+50% chance to survive an attack**

This survival chance is not increased by the Teacher Buff.

The Gleaming Sardine Scale acts like armor, but it does not become stronger through Teacher effects.

---

## Cursed Cuttlefish Ink

**Base Catch Rate:** 15%

The **Cursed Cuttlefish Ink** blinds the player it is given to.

The affected player:

- Cannot perform their role
- Cannot vote

This item is useful for stopping a dangerous player from acting or influencing the vote.

---

## The Black Pearl

**Base Catch Rate:** 15%

The **Black Pearl** gives the Fisher access to one of two powerful effects.

When using The Black Pearl, the Fisher chooses one of the following options:

1. Summon a Sea Beast
2. Empower a player at a cost

---

### Option 1: Summon a Sea Beast

The Fisher may use The Black Pearl to summon a random Sea Beast.

The Sea Beast arrives on the following day.

If The Black Pearl is used on a **Rainy** day, the Fisher may choose which Sea Beast is summoned instead of it being random.

### Example

The Fisher uses The Black Pearl on a normal day.

A random Sea Beast is summoned and will arrive the next day.

If the Fisher uses The Black Pearl on a Rainy day, they choose the Sea Beast that will arrive.

---

### Option 2: Health at a Cost

The Fisher may use The Black Pearl to empower a player.

The chosen player gains:

- **2 Health Points**

However, all protection on that player is removed.

This includes protection from items, abilities, and effects such as:

- Armor
- Survival buffs
- Priest Pendant
- Other protective effects

The Black Pearl can make a player healthier, but it also strips away their safety.

---

## Moby Dick’s Harpoon

**Base Catch Rate:** 10%

**Moby Dick’s Harpoon** allows the Fisher to slay any Sea Beast.

Only **1 Moby Dick’s Harpoon** can be found.

Once the Fisher has the Harpoon, it can be used to kill a Sea Beast.

Slaying a Sea Beast may allow the Fisher to gain a special power depending on the Sea Beast killed.

The exact power depends on the Sea Beast and should be handled by the Game Host.

---

# Storing Items

The Fisher may store **1 Special Item** for a later day.

A stored item may be used on a later day without preventing the Fisher from fishing for a new item that day.

This means the Fisher can use both:

- The stored Special Item
- The Special Item caught that same day

### Example

On Day 1, the Fisher catches the Gleaming Sardine Scale and stores it.

On Day 2, the Fisher casts their line again and catches Cursed Cuttlefish Ink.

The Fisher may use both the stored Gleaming Sardine Scale and the newly caught Cursed Cuttlefish Ink on Day 2.

---

# Weather Effects

Weather can affect the Fisher’s chance of catching Special Items.

## Weather Modifiers

- **Rainy:** +10% chance to catch Moby Dick’s Harpoon only
- **Hot:** No change
- **Cold:** No change
- **Freezing:** No change
- **Heat Wave:** -5% chance to all items
- **Clear:** -5% chance to all items

### Example

Moby Dick’s Harpoon normally has a 10% catch rate.

If the weather is Rainy, the chance becomes:

**10% + 10% = 20%**

If the weather is Clear, the chance becomes:

**10% - 5% = 5%**

---

# Jeremy Wade’s Net

If the Fisher receives **Jeremy Wade’s Net**, they are guaranteed to catch a Special Item regardless of weather.

While the Fisher has Jeremy Wade’s Net:

- Weather penalties do not matter.
- The Fisher will not fail to catch something.
- The catch is guaranteed, but the item caught may still be random unless the Game Host rules otherwise.

---

# Extra Action

If the Fisher receives an **Extra Action**, they may cast their line again that day.

If the Fisher catches another Special Item, they may choose to:

- Use it that same day
- Give it to another player
- Store it, if they do not already have a stored item

The Fisher still may only store **1 Special Item** at a time.

---

# Global Announcements

The following Fisher actions are globally announced:

- \`FISHER has caught SPECIAL ITEM\`
- \`FISHER didn't catch anything\`
- \`FISHER has given SPECIAL ITEM to PLAYER X\`
- \`FISHER has used SPECIAL ITEM\`
- \`FISHER has used the LUMINOUS SEASHELL\`
- \`FISHER has used MOBY DICK'S HARPOON to slay SEA BEAST\`
- \`FISHER has gained power from the slain SEA BEAST\`

Examples:

- \`FISHER has caught Luminous Seashell\`
- \`FISHER didn't catch anything\`
- \`FISHER has given Gleaming Sardine Scale to PLAYER X\`
- \`FISHER has used Cursed Cuttlefish Ink\`
- \`FISHER has used the LUMINOUS SEASHELL\`
- \`FISHER has used MOBY DICK'S HARPOON to slay The Drowned Maw\`
- \`FISHER has gained power from the slain SEA BEAST\`

When the Fisher gives a Special Item to a player, that means the item’s ability is being used on that selected player.

When the Fisher uses a Special Item, that means the Fisher is using the item on themselves.

The Luminous Seashell has its own announcement so players know it was used, but not who it was used on.

---

# Interrogation and Luminous Seashell Information

If the Fisher is revealed through a successful **Interrogation** or **Luminous Seashell**, possible information includes:

- \`FISHER caught SPECIAL ITEM\`
- \`FISHER is giving SPECIAL ITEM to PLAYER X\`
- \`FISHER is using SPECIAL ITEM\`
- \`FISHER is summoning SELECTED SEA BEAST\`
- \`FISHER is voting for PLAYER X\`

Examples:

- \`FISHER caught The Black Pearl\`
- \`FISHER is giving Gleaming Sardine Scale to PLAYER X\`
- \`FISHER is using Cursed Cuttlefish Ink\`
- \`FISHER is summoning The Drowned Maw\`
- \`FISHER is voting for PLAYER X\`

---

## Interrogator-Only Information

The Interrogator may also receive information about what the Fisher did on the previous day.

Possible previous-day information:

- \`FISHER caught SPECIAL ITEM\`
- \`FISHER gave SPECIAL ITEM to PLAYER X\`
- \`FISHER used SPECIAL ITEM\`
- \`FISHER used LUMINOUS SEASHELL on PLAYER X\`
- \`FISHER summoned SEA BEAST\`
- \`FISHER voted for PLAYER X\`

The Luminous Seashell target is only revealed through Interrogator-only previous-day information, not through the global announcement.`,Ce=`## Overview & Lore

The **Guru** harnesses the power of **Celium Crystals** to read, cleanse, and influence the players on **The Island**.

Unlike roles that rely on weapons, food, or shelter, the Guru uses spiritual energy and Celium-based crystals to understand what players are doing. The Guru can reveal information, remove negative effects, read a player’s aura, or give someone a powerful crystal that changes based on their actions.

The Guru is strongest when they carefully choose which crystal to use each day.

---

## Core Information

The Guru has access to **4 Celium Crystals**.

The Guru may normally use **1 Crystal per day**.

On **Full Moon** or **Blood Moon** days, the Guru may use **1 additional Crystal**, allowing them to use **2 Crystals total** that day.

The Guru’s Crystals are:

1. **Parlay Prism**
2. **Purity Stone**
3. **Revelation Quartz**
4. **Karmic Vessel**

Using, giving, or recalling a crystal counts as the Guru’s Crystal action for the day.

**Can Handle Celium without Severe Consequence**

---

# Crystals

## Crystal 1: Parlay Prism

The **Parlay Prism** allows the Guru to read the day’s Parlay activity.

When used, the Guru sees a list of all **Parlay objectives** that were submitted for that day.

The Guru does **not** see:

- Which player submitted which Parlay card
- Any individual player’s full 3-pick card
- Who is connected to each objective

The Guru is not allowed to discuss strategy with Parlay Players.

However, the Guru may share the objective list with the current players on The Island.

---

## Crystal 2: Purity Stone

The **Purity Stone** allows the Guru to cleanse one player of negative effects.

The Guru chooses **1 player**.

That player is cleansed of negative effects such as:

- Poison
- Role-blocking effects
- Effects that prevent their role from happening

However, **jailing cannot be cleansed**.

If the player is jailed, they still cannot perform their role, even if other negative effects are removed.

### Example

Player X is poisoned and role-blocked.

The Guru uses Purity Stone on Player X.

Player X is no longer poisoned or role-blocked.

However, if Player X is in jail, they still remain jailed.

---

## Crystal 3: Revelation Quartz

The **Revelation Quartz** allows the Guru to read the aura of one player.

The Guru chooses **1 player** and receives **one aura reading** based on that player’s current actions or situation.

The Guru does not receive full details. They only receive the aura category.

---

# Aura Readings

## Sensing Hostility

The player is acting against the Guru.

Examples include:

- Voting for the Guru
- Attempting to attack the Guru
- Poisoning the Guru
- Using a negative effect on the Guru

---

## Sensing Toxicity

The player is connected to poison.

This may mean:

- The player is being poisoned
- The player is poisoning someone else

---

## Sensing Danger

The player is connected to an attack.

This may mean:

- The player is being targeted for an attack
- The player is targeting someone else for an attack

---

## Sensing Peace

The player is connected to positive effects.

This may mean:

- The player is receiving healing
- The player is giving healing
- The player is receiving armor
- The player is giving armor
- The player is receiving protection
- The player is giving protection
- The player is receiving a buff
- The player is giving a buff

---

## Aura Priority Rule

If multiple aura readings could apply to the same player, the Guru only receives the highest-priority reading.

Priority order:

1. **Hostility**
2. **Toxicity**
3. **Danger**
4. **Peace**

### Example

Player X is healing another player, but is also poisoning the Guru.

Both **Peace** and **Hostility** apply.

Because Hostility has higher priority, the Guru receives:

\`Sensing Hostility\`

---

# Crystal 4: Karmic Vessel

The **Karmic Vessel** is a crystal the Guru gives to another player.

Once given, the Karmic Vessel tracks that player’s actions over time and charges positively or negatively based on what they do.

The effects of the Karmic Vessel apply to whoever is currently holding it.

---

## How the Karmic Vessel Charges

At the end of each day, the Karmic Vessel changes based on what the holder did that day.

### Normal Days

- Positive day: **+1 charge**
- Negative day: **-1 charge**

### Full Moon / Blood Moon Days

- Positive day: **+2 charge**
- Negative day: **-2 charge**

---

## Negative Actions

The following count as negative actions:

- Poisoning someone
- Attacking a player
- Voting for the Guru
- Applying an effect that stops a player from using their role

Jailing does **not** count as a negative action for the Karmic Vessel.

---

## Positive Actions

The following count as positive actions:

- Healing
- Giving armor
- Giving Lively Lemons
- Protecting against attacks
- Giving a Teacher Buff
- Other helpful effects the Game Host considers positive

---

## Negative Takes Priority

If the holder performs both a positive and negative action on the same day, it counts as a **negative day**.

### Example

Player X heals someone but also poisons another player.

Even though Player X did something positive, the poison makes it a negative day.

The Karmic Vessel loses charge.

---

## Neutral Days

If the holder does not perform any positive or negative actions, the Karmic Vessel does not change.

### Example

The Vessel is at **-3**.

The holder does nothing that day.

The Vessel stays at **-3**.

---

# Karmic Vessel Charge Effects

The Karmic Vessel’s effects apply to whoever is currently holding it.

The charge persists until changed by future actions.

### Example

If the Vessel is at **-2** and the holder has a positive day, it becomes **-1**.

If the Vessel is at **+2** and the holder has a negative day, it becomes **+1**.

---

## Negative Charge Effects

### Negative -1: Tainted

The holder receives:

- Poison received from all sources is increased by **+1**

---

### Negative -2: Cursed

The holder receives:

- Poison received from all sources is increased by **+1**
- Healing received is reduced by **-1**
- Role success chance is reduced by **-20%**

The role success reduction only applies to roles that use a success chance.

---

### Negative -3: Blighted

The holder receives:

- Poison received from all sources is increased by **+2**
- Healing received is reduced by **-2**
- Role success chance is reduced by **-20%**
- Food consumption becomes **-2 Food per day** instead of **-1**
- Increased chance of getting sick

The role success reduction only applies to roles that use a success chance.

---

### Negative -4: Doomed

The holder receives:

- Poison received from all sources is increased by **+2**
- Healing received is reduced by **-2**
- Role success chance is reduced by **-20%**
- Food consumption becomes **-2 Food per day** instead of **-1**
- Increased chance of getting sick**
- All votes against that player are doubled

The vote-doubling effect only works until the **Top 4**.

---

## Positive Charge Effects

### Positive +1: Blessed

The holder receives:

- Healing received from all sources is increased by **+1**

---

### Positive +2: Radiant

The holder receives:

- Healing received from all sources is increased by **+1**
- Poison received is reduced by **-1**
- Role success chance is increased by **+10%**

The role success increase only applies to roles that use a success chance.

---

### Positive +3: Exalted

The holder receives:

- Healing received from all sources is increased by **+2**
- Poison received is reduced by **-2**
- Role success chance is increased by **+10%**
- Votes counted against the holder are halved

The vote-halving effect only works until the **Top 4**.

---

# Recalling the Karmic Vessel

The Guru may recall the Karmic Vessel at any time.

Recalling the Karmic Vessel counts as the Guru’s Crystal action for the day.

The Guru does **not** know the Vessel’s current charge until it returns.

After recalling the Karmic Vessel, the Guru may immediately give it to another player on the same day, but only if they do not use any other Crystal action that day.

### Important Rule

Recall is the main action.

Re-giving the Vessel is the only allowed follow-up after recalling it on the same day.

---

# Daily Crystal Limit

The Guru may normally use only **1 Crystal per day**.

The following all count as using a Crystal:

- Using Parlay Prism
- Using Purity Stone
- Using Revelation Quartz
- Giving the Karmic Vessel
- Recalling the Karmic Vessel

On **Full Moon** or **Blood Moon** days, the Guru may use **2 Crystals total**.

---

# Extra Action

The Guru’s Extra Action is tied to the **Full Moon** and **Blood Moon**.

On these days, the Guru is empowered by the moon and may use **1 additional Crystal**.

This means the Guru may use **2 Crystals total** on Full Moon or Blood Moon days.

---

# Global Announcements

The following Guru actions are globally announced:

- \`GURU has used PARLAY PRISM\`
- \`GURU has used PURITY STONE on PLAYER X\`
- \`GURU has used REVELATION QUARTZ on PLAYER X\`
- \`GURU has given KARMIC VESSEL to PLAYER X\`
- \`GURU has recalled KARMIC VESSEL\`

Examples:

- \`GURU has used PARLAY PRISM\`
- \`GURU has used PURITY STONE on PLAYER X\`
- \`GURU has used REVELATION QUARTZ on PLAYER X\`
- \`GURU has given KARMIC VESSEL to PLAYER X\`
- \`GURU has recalled KARMIC VESSEL\`

---

# Interrogation and Luminous Seashell Information

If the Guru is revealed through a successful **Interrogation** or **Luminous Seashell**, possible information includes:

- \`GURU sensed AURA from PLAYER X\`
- \`GURU saw PARLAY OBJECTIVE LIST\`
- \`GURU is voting for PLAYER X\`

These messages do not need to reveal the exact aura result unless the Game Host wants that information revealed.

---

## Interrogator-Only Information

The Interrogator may also receive information about what the Guru did on the previous day.

Possible previous-day information:

- \`GURU sensed AURA from PLAYER X\`
- \`GURU saw PARLAY OBJECTIVE LIST\`
- \`GURU used PURITY STONE on PLAYER X\`
- \`GURU gave KARMIC VESSEL to PLAYER X\`
- \`GURU recalled KARMIC VESSEL\`
- \`GURU voted for PLAYER X\``,ke=`## Overview & Lore

The **Hunter** hunts for food on The Island and ventures deep into dangerous territory to find Special Animals with unique powers.

The Hunter is not guaranteed to find something every day. Each hunt is random, and each Special Animal has its own chance of being found. Some animals protect players, some reveal information, and some can completely stop another player from acting.

The Hunter is also connected to The Island’s food supply, but their Special Animals can still be found even if food cannot be gained.

---

## Core Information

The Hunter may hunt for **1 Special Animal each day**.

Each Special Animal has a base success rate. This means the Hunter is not guaranteed to find an animal unless they have a special effect that guarantees a successful hunt.

If the Hunter successfully finds a Special Animal, they may choose to:

- Use it on themselves
- Give it to another player
- Store it for a later day

The Hunter may only store **1 Special Animal** at a time.

---

# Food Rule

The Hunter is dependent on the **Cook** to help provide food for The Island.

If the Cook exists on The Island, the Hunter may help contribute food through hunting.

If there is no Cook on The Island, the Hunter does **not** provide food.

However, the Hunter can still go hunting and find Special Animals even if the Cook is not there.

---

# Special Animals

## Ethereal Eagle

**Base Success Rate:** 15%

The **Ethereal Eagle** allows the Hunter to protect one player during the night.

The Hunter chooses who the Eagle watches over.

That player is protected from nighttime attacks by:

- Cannibal
- Werewolf

The Ethereal Eagle does not protect against the Assassin or other forms of damage unless the Game Host rules otherwise.

---

## Envious Fox

**Base Success Rate:** 15%

The **Envious Fox** allows the Hunter to tell a false story in the same way the Bard can.

This works like the Bard’s **Sedition** ability.

The Hunter may create false information through rumor, storytelling, or manipulation.

The Envious Fox can mislead players, but it cannot change what actually happened.

The global announcement only says that the Envious Fox was used. It does not reveal who or what the false story was about.

---

## Mystical Owl

**Base Success Rate:** 15%

The **Mystical Owl** allows the Hunter to see detailed information about the day’s votes and attacks.

When used, the Hunter receives a detailed list showing:

- Who each player is voting for
- Who will be attacked that day

This is not just a vote count. It shows the specific player connected to each action.

### Example Information

\`PLAYER X is voting for PLAYER Y\`

\`PLAYER Z will be attacked\`

This makes the Mystical Owl one of the Hunter’s strongest information tools.

---

## Jinxed Jackrabbit

**Base Success Rate:** 15%

The **Jinxed Jackrabbit** allows the Hunter to jinx one player.

The jinxed player:

- Cannot perform their role
- Cannot vote

This is useful for stopping a dangerous player from acting or influencing the vote.

---

## Sif, The Great Grey Wolf

**Special Animal**

**Sif, The Great Grey Wolf** is the Hunter’s strongest companion.

Sif protects the Hunter from attacks by:

- Cannibal
- Werewolf
- Assassin

This protection is **100% guaranteed**.

Sif protects the Hunter even if the Hunter is unable to perform their role that day.

If the Hunter is attacked while protected by Sif, Sif does not only block the attack. Sif also has a **100% base chance** to kill the attacker on the night of the attack.

### Example

The Assassin attacks the Hunter.

Sif protects the Hunter from the attack.

Sif then kills the Assassin.

---

# Storing Animals

The Hunter may store **1 Special Animal** for a later day.

A stored animal may be used on a later day without preventing the Hunter from hunting for a new animal that day.

This means the Hunter can use both:

- The stored Special Animal
- The Special Animal found that same day

### Example

On Day 1, the Hunter finds the Ethereal Eagle and stores it.

On Day 2, the Hunter hunts again and finds the Jinxed Jackrabbit.

The Hunter may use both the stored Ethereal Eagle and the newly found Jinxed Jackrabbit on Day 2.

---

# Weather Effects

Weather can affect the Hunter’s chance of finding Special Animals.

## Weather Modifiers

- **Clear:** +10% chance to find Sif, The Great Grey Wolf only
- **Hot:** No change
- **Cold:** No change
- **Heat Wave:** No change
- **Freezing:** -5% chance to all animals
- **Rainy:** -5% chance to all animals

### Example

If Sif has a base chance to appear and the weather is Clear, Sif’s chance is increased by **+10%**.

If the weather is Freezing or Rainy, all Special Animal chances are reduced by **-5%**.

---

# Robin Hood’s Hat

If the Hunter receives **Robin Hood’s Hat**, they are guaranteed to have a successful hunt regardless of weather.

While the Hunter has Robin Hood’s Hat:

- Weather penalties do not matter.
- The Hunter will not fail to find something.
- The hunt is guaranteed to succeed, but the animal found may still be random unless the Game Host rules otherwise.

---

# Extra Action

If the Hunter receives an **Extra Action**, they may hunt again that day.

If the Hunter finds another Special Animal, they may choose to:

- Use it that same day
- Give it to another player
- Store it, if they do not already have a stored animal

The Hunter may still only store **1 Special Animal** at a time.

---

# Global Announcements

The following Hunter actions are globally announced:

- \`HUNTER has found SPECIAL ANIMAL\`
- \`HUNTER didn't find anything\`
- \`HUNTER has given SPECIAL ANIMAL to PLAYER X\`
- \`HUNTER has used SPECIAL ANIMAL\`
- \`HUNTER has used ENVIOUS FOX\`
- \`SIF, THE GREAT GREY WOLF has killed ATTACKER X\`

Examples:

- \`HUNTER has found Ethereal Eagle\`
- \`HUNTER didn't find anything\`
- \`HUNTER has given Jinxed Jackrabbit to PLAYER X\`
- \`HUNTER has used Mystical Owl\`
- \`HUNTER has used ENVIOUS FOX\`
- \`SIF, THE GREAT GREY WOLF has killed PLAYER X\`

When the Hunter gives a Special Animal to a player, that means the animal’s ability is being used on that selected player.

When the Hunter uses a Special Animal, that means the Hunter is using the animal on themselves.

The Envious Fox has its own announcement so players know it was used, but not what story was told or who was affected.

---

# Interrogation and Luminous Seashell Information

If the Hunter is revealed through a successful **Interrogation** or **Luminous Seashell**, possible information includes:

- \`HUNTER found SPECIAL ANIMAL\`
- \`HUNTER is giving SPECIAL ANIMAL to PLAYER X\`
- \`HUNTER is using SPECIAL ANIMAL\`
- \`HUNTER is using ENVIOUS FOX\`
- \`HUNTER is voting for PLAYER X\`

Examples:

- \`HUNTER found Ethereal Eagle\`
- \`HUNTER is giving Jinxed Jackrabbit to PLAYER X\`
- \`HUNTER is using Mystical Owl\`
- \`HUNTER is using ENVIOUS FOX\`
- \`HUNTER is voting for PLAYER X\`

---

## Interrogator-Only Information

The Interrogator may also receive information about what the Hunter did on the previous day.

Possible previous-day information:

- \`HUNTER found SPECIAL ANIMAL\`
- \`HUNTER gave SPECIAL ANIMAL to PLAYER X\`
- \`HUNTER used SPECIAL ANIMAL\`
- \`HUNTER used ENVIOUS FOX\`
- \`HUNTER voted for PLAYER X\``,He=`## Overview & Lore

The **Interrogator** gathers information by questioning players on **The Island**.

Unlike roles that rely on guessing, tracking, or watching from a distance, the Interrogator directly targets a player and attempts to learn what they are doing, who they are voting for, and what they did the previous day.

The Interrogator is one of the strongest information roles on The Island, especially when combined with jail, the Teacher Buff, or the **Machete From Hell**.

The Interrogator does not simply ask questions. They apply pressure. When given the right tools, they can make sure certain players stay gone long enough for The Island to feel the consequences.

---

# Core Information

The Interrogator may choose **1 player to interrogate each day**.

If the interrogation is successful, the Interrogator learns information about that player’s current and previous actions.

The Interrogator’s chance of success depends on the situation.

---

# Interrogation Success Chance

The Interrogator’s success chance is based on the target’s condition.

- **Base success chance:** 50%
- **If the target is jailed:** 70%
- **With the Teacher Buff:** 100%

---

# Interrogation Results

If the interrogation succeeds, the Interrogator learns:

- What that player’s action will be for the current day
- Who that player is voting for that day
- What action that player did the day before
- Who that player voted for the day before
- Whether that player used a Secret Role the day before

If the player used a Secret Role the day before, the Interrogator is only told:

\`PLAYER X used a Secret Role yesterday.\`

This does **not** reveal which Secret Role was used.

---

# Vote Audit

The Interrogator may call for a **Vote Audit**.

Vote Audit has a **3-day cooldown**.

When calling a Vote Audit, the Interrogator must choose one of two options:

1. **Public Vote Audit**
2. **Private Vote Audit**

---

## Option 1: Public Vote Audit

The Interrogator announces at the start of the day that all votes will be public.

Everyone on The Island will see exactly who is voting for who.

These votes are guaranteed to be true.

Lies, false information, Sedition, or other manipulation effects cannot interfere with a Public Vote Audit.

### Global Announcement

\`INTERROGATOR has called for a VOTE AUDIT. All votes will be public.\`

---

## Option 2: Private Vote Audit

The Interrogator announces at the start of the day that the vote will be shared only with the Interrogator.

At the end of the vote, the Interrogator receives the vote information privately.

Unlike the Public Vote Audit, this version can be manipulated by lies or false information.

### Global Announcement

\`INTERROGATOR has called for a VOTE AUDIT. All votes will be shown to the INTERROGATOR alone.\`

---

# Machete From Hell

The Interrogator is one of the roles that can wield the **Machete From Hell**.

If the Interrogator receives the **Machete From Hell**, they gain access to **Exile Marking** for that day.

The Machete does not allow the Interrogator to permanently execute a kicked-off player. Instead, it allows the Interrogator to mark the kicked-off player so they cannot return to The Island for a limited time.

---

# Exile Marking

If the Interrogator has the **Machete From Hell**, they may place an **Exile Mark** on the player who was kicked off that day.

The Exile Mark prevents that player from returning to The Island for **3 days**.

This means the marked player cannot be revived, returned, summoned back, replaced through timeline effects, or restored by any other effect during that time.

---

## Exile Mark Rules

The Interrogator may only place an Exile Mark on the player who was kicked off that same day.

The decision must be made that night after the kicked-off player has been confirmed.

The Interrogator cannot place an Exile Mark on players who were kicked off on previous days.

The Exile Mark lasts for **3 days**.

After the 3 days pass, the player may return to The Island if another effect would normally allow them to return.

The Exile Mark does not kill the player.

The Exile Mark does not permanently remove the player from the game.

It only blocks return effects for a limited time.

---

## Exile Mark Example

Player X is kicked off on **Day 5**.

That night, the Interrogator has the **Machete From Hell** and chooses to place an Exile Mark on Player X.

Player X cannot return to The Island for **Day 6, Day 7, or Day 8**.

After Day 8 ends, the Exile Mark expires.

Starting on **Day 9**, Player X may return if another effect would normally allow them to return.

---

# Exile Mark Restrictions

The Exile Mark cannot be used on:

- A player who was not kicked off that day
- A player who died from a night attack
- A player who died from poison
- A player who died from disease
- A player who was removed on a previous day
- A player protected from exile by a specific effect

The Exile Mark only applies to the player removed by the daily vote.

---

# Machete From Hell Timing

The **Machete From Hell** returns to the Blacksmith at the end of the day.

If the Interrogator receives the Machete for the day, they may use **Exile Marking** that night before the Machete returns.

After the Exile Mark decision is made, the Machete returns to the Blacksmith.

The Interrogator does not keep the Machete permanently.

---

# Extra Action

If the Interrogator receives an **Extra Action**, they may interrogate one additional player that day.

The second interrogation cannot target the same player as the first interrogation.

### Example

The Interrogator interrogates Player X.

If they receive an Extra Action, they may also interrogate Player Y.

They cannot interrogate Player X twice in the same day.

---

# Extra Action and Exile Marking

An Extra Action does not allow the Interrogator to place multiple Exile Marks.

Only one player can be kicked off per normal vote, and the Interrogator may only mark the player who was kicked off that day.

The Interrogator may only place **1 Exile Mark** per day.

---

# Global Announcements

The following Interrogator actions are globally announced:

- \`INTERROGATOR will be interrogating PLAYER X\`
- \`INTERROGATOR has called for a VOTE AUDIT. All votes will be public.\`
- \`INTERROGATOR has called for a VOTE AUDIT. All votes will be shown to the INTERROGATOR alone.\`
- \`INTERROGATOR has received the MACHETE FROM HELL\`
- \`INTERROGATOR has placed an EXILE MARK on KICKED OFF PLAYER. KICKED OFF PLAYER cannot return to The Island for 3 days.\`

### Examples

- \`INTERROGATOR will be interrogating PLAYER X\`
- \`INTERROGATOR has called for a VOTE AUDIT. All votes will be public.\`
- \`INTERROGATOR has received the MACHETE FROM HELL\`
- \`INTERROGATOR has placed an EXILE MARK on PLAYER X. PLAYER X cannot return to The Island for 3 days.\`

---

# Interrogation and Luminous Seashell Information

If the Interrogator is revealed through a successful **Interrogation** or **Luminous Seashell**, possible information includes:

- \`INTERROGATOR will be interrogating PLAYER X\`
- \`INTERROGATOR will be calling for a VOTE AUDIT\`
- \`INTERROGATOR will be placing an EXILE MARK on KICKED OFF PLAYER\`
- \`INTERROGATOR is voting for PLAYER X\`

If the Interrogator is using a **Private Vote Audit**, then the vote information they receive may also be revealed if they are successfully interrogated or viewed through Luminous Seashell.

---

# Interrogator-Only Information

The Interrogator may also receive information about what another Interrogator did on the previous day, if applicable.

Possible previous-day information:

- \`INTERROGATOR interrogated PLAYER X\`
- \`INTERROGATOR called for a VOTE AUDIT\`
- \`INTERROGATOR placed an EXILE MARK on KICKED OFF PLAYER\`
- \`INTERROGATOR voted for PLAYER X\``,Oe=`## Overview & Lore

The **Jailor** is a classic protector of The Island.

The Jailor controls who is locked away for the day, stopping dangerous players from using their roles while also protecting them from certain threats. The Jailor can be used defensively to protect a player, offensively to block a role, or strategically to control the vote.

The Jailor also has access to **Prisoner’s Dilemma**, a powerful mind game that can punish players depending on how they choose to act.

---

## Core Information

The Jailor may jail **1 player each day**.

A jailed player is released the following day.

A player cannot be jailed twice in a row.

### While Jailed

A jailed player:

- Cannot perform their normal role
- Is protected from Cannibal attacks
- Is protected from Werewolf attacks
- Can still be assassinated by the Assassin
- Can still be poisoned
- Can still be healed

The Wizard and Mimic may still use their **Secret Role** abilities while in a normal jail.

---

# Jail

## Normal Jail

The Jailor may choose one player to jail.

That player is locked away until the following day.

The main purpose of jail is to stop a player from using their role while also protecting them from some attacks.

### Normal Jail Effects

The jailed player:

- Cannot use their normal role
- Cannot be attacked by the Cannibal
- Cannot be attacked by the Werewolf
- Can still be assassinated by the Assassin
- Can still be poisoned
- Can still be healed
- Can still vote unless another effect prevents it
- Wizard and Mimic may still use Secret Role abilities

### Consecutive Jail Rule

The same player cannot be jailed two days in a row.

---

# Sacred Jail

The **Sacred Jail** is an upgraded jail that must be built by the Builder.

Sacred Jail is much stronger than normal jail and fully locks down the jailed player.

### Sacred Jail Effects

A player in Sacred Jail:

- Cannot use their normal role
- Cannot use Secret Role abilities
- Cannot vote
- Cannot be poisoned
- Cannot be assassinated by the Assassin
- Is protected from Cannibal attacks
- Is protected from Werewolf attacks

Wizard and Mimic cannot use their Secret Roles while in Sacred Jail.

The Sacred Jail is the only jail that the Assassin cannot break into.

---

# Prisoner’s Dilemma

The Jailor may place two players into a **Prisoner’s Dilemma**.

Prisoner’s Dilemma has a **3-day cooldown**.

The Jailor chooses **2 players** on The Island who are not currently jailed.

The Jailor cannot use the same pair of players again.

Each chosen player must secretly choose one of two options:

- **Cooperate**
- **Defect**

The Jailor is told what both players chose.

---

## Prisoner’s Dilemma Results

### Both Players Cooperate

If both players choose **Cooperate**, neither player suffers a penalty from the Jailor.

Global announcement:

\`PLAYER X and PLAYER Y have cooperated.\`

---

### One Cooperates, One Defects

If one player chooses **Cooperate** and the other chooses **Defect**, the player who cooperated is punished.

The player who chose **Cooperate**:

- Cannot vote that day

The player who chose **Defect**:

- Continues as normal

Global announcement:

\`PLAYER X has cooperated while PLAYER Y has defected.\`

---

### Both Players Defect

If both players choose **Defect**, both players are punished.

All votes against those players are doubled for that day.

Global announcement:

\`PLAYER X and PLAYER Y have defected. All votes towards these players will now be doubled for today.\`

---

## Prisoner’s Dilemma Information Rules

If a player in Prisoner’s Dilemma is successfully interrogated, their choice is revealed to the Interrogator.

This also works with the **Luminous Seashell**.

### Example

Player X is placed in Prisoner’s Dilemma and chooses Defect.

If the Interrogator successfully interrogates Player X, they may learn:

\`PLAYER X chose Defect in Prisoner's Dilemma.\`

---

# Extra Action

If the Jailor receives an **Extra Action**, they may jail one additional player that day.

The same consecutive jail rule still applies.

This means the Jailor cannot use the Extra Action to jail someone who was jailed the previous day.

---

# Global Announcements

The following Jailor actions are globally announced:

- \`JAILOR has jailed PLAYER X\`
- \`PLAYER X and PLAYER Y have been put in a Prisoner's Dilemma by JAILOR\`
- \`PLAYER X and PLAYER Y have cooperated\`
- \`PLAYER X has cooperated while PLAYER Y has defected\`
- \`PLAYER X and PLAYER Y have defected. All votes towards these players will now be doubled for today.\`

Examples:

- \`JAILOR has jailed PLAYER X\`
- \`PLAYER X and PLAYER Y have been put in a Prisoner's Dilemma by JAILOR\`
- \`PLAYER X has cooperated while PLAYER Y has defected\`

---

# Interrogation and Luminous Seashell Information

If the Jailor is revealed through a successful **Interrogation** or **Luminous Seashell**, possible information includes:

- \`JAILOR will jail PLAYER X\`
- \`JAILOR will place PLAYER X and PLAYER Y in a Prisoner's Dilemma\`
- \`JAILOR is voting for PLAYER X\`

If a player involved in Prisoner’s Dilemma is interrogated or viewed through the Luminous Seashell, their choice may be revealed:

- \`PLAYER X chose Cooperate in Prisoner's Dilemma\`
- \`PLAYER X chose Defect in Prisoner's Dilemma\`

---

## Interrogator-Only Information

The Interrogator may also receive information about what the Jailor did on the previous day.

Possible previous-day information:

- \`JAILOR jailed PLAYER X\`
- \`JAILOR placed PLAYER X and PLAYER Y in a Prisoner's Dilemma\`
- \`JAILOR voted for PLAYER X\``,Me=`## Overview & Lore

The **Medic** uses medicine, treatment, and controlled toxins to affect the players on **The Island**.

The Medic is one of the most important survival roles because they can heal players, poison players, and protect The Island from disease. While the Cook can restore Health and Food through meals, the Medic specializes in direct medical treatment, controlled doses, disease control, and physical recovery.

The Medic can be a protector, but they can also be dangerous if they choose to use poison.

The Medic’s strength comes from their ability to decide the exact dosage of their mixtures. A Medic does not simply heal or poison. They decide how much of the mixture affects **Health**, how much affects **Food**, and from which direction the treatment or toxin is applied.

---

# Core Information

The Medic may affect up to **2 different players per day**.

The Medic may choose one of the following action combinations:

- **Heal / Heal**
- **Heal / Poison**

The Medic cannot normally choose:

- **Poison / Poison**

The Medic cannot heal and poison the same player on the same day.

The Medic cannot target the same player twice on the same day.

The Medic may also use **Diagnosis** once per day to check the progression of a disease or decay effect.

Diagnosis does not count as one of the Medic’s two normal heal or poison actions.

**Can Handle Celium without Severe Consequence**

---

# Medic Directions

Whenever the Medic heals or poisons a player, the Medic must choose the direction the action is coming from.

The Medic may choose one of the following 8 directions:

- North
- North East
- East
- South East
- South
- South West
- West
- North West

Directions may matter for roles or effects that watch, track, block, or reveal where actions come from.

### Example

The Medic may say:

\`MEDIC heals PLAYER X from the North East.\`

or

\`MEDIC poisons PLAYER Y from the South.\`

---

# Medic Mixtures

The Medic creates mixtures that affect **Health** and **Food**.

When healing or poisoning, the Medic may choose up to:

- **2 Health points**
- **2 Food points**

This means the Medic can affect both Health and Food at the same time.

The Medic may choose any combination as long as neither Health nor Food goes above 2 points.

---

# Healing

The Medic may heal a player with a **Treatment Mixture**.

A Treatment Mixture restores Health and/or Food.

The Medic chooses:

- Up to **2 Health** restored
- Up to **2 Food** restored

The target cannot go above their maximum Health or Food unless another effect allows it.

## Healing Mixture Examples

The Medic may heal a player for:

- **2 Health / 0 Food**
- **0 Health / 2 Food**
- **1 Health / 1 Food**
- **2 Health / 1 Food**
- **1 Health / 2 Food**
- **2 Health / 2 Food**

### Example

The Medic chooses to heal Player X from the East.

The Medic chooses a Treatment Mixture of:

- **2 Health**
- **1 Food**

Player X restores **2 Health Points** and **1 Food Point**, as long as this does not exceed their maximum Health or Food.

---

# Poison

The Medic may poison a player with a **Toxin Mixture**.

A Toxin Mixture removes Health and/or Food.

The Medic chooses:

- Up to **2 Health** damage
- Up to **2 Food** loss

The target cannot go below 0 Food.

Health damage can contribute to death normally.

## Poison Mixture Examples

The Medic may poison a player for:

- **2 Health / 0 Food**
- **0 Health / 2 Food**
- **1 Health / 1 Food**
- **2 Health / 1 Food**
- **1 Health / 2 Food**
- **2 Health / 2 Food**

### Example

The Medic chooses to poison Player Y from the South West.

The Medic chooses a Toxin Mixture of:

- **1 Health damage**
- **2 Food loss**

Player Y loses **1 Health Point** and **2 Food Points**.

---

# Healing and Poisoning Rules

The Medic may heal two different players in the same day.

### Allowed Example

- Heal Player X
- Heal Player Y

This is allowed because both targets are different players.

---

The Medic may heal one player and poison another player in the same day.

### Allowed Example

- Heal Player X
- Poison Player Y

This is allowed because the targets are different players and the Medic is only poisoning once.

---

The Medic may not normally poison two players in the same day.

### Not Allowed Example

- Poison Player X
- Poison Player Y

This is not allowed unless the Medic has an Extra Action.

---

The Medic cannot affect the same player twice on the same day.

### Not Allowed Examples

- Heal Player X and Heal Player X
- Poison Player X and Poison Player X
- Heal Player X and Poison Player X

---

# Diagnosis

The Medic may use **Diagnosis** once per day.

Diagnosis allows the Medic to examine one player and learn how far along a disease, illness, or decay effect is.

Diagnosis is mainly used for long-term conditions such as:

- Disease
- Illness
- Infection
- Celium Decay
- Other Host-approved decay effects

Diagnosis does **not** check poison.

Diagnosis does **not** reveal the player’s role.

Diagnosis does **not** reveal who caused the disease.

Diagnosis does **not** reveal who targeted the player.

---

## What Diagnosis Reveals

When the Medic diagnoses a player, the Game Host may tell the Medic:

- Whether the player has a disease or decay effect
- The name of the disease or decay effect, if known
- What stage the disease is in
- How close the disease is to worsening
- Whether the Medic can cure it
- What may happen if it is not treated

---

## Diagnosis Examples

If the target has no disease:

\`PLAYER X shows no signs of disease or decay.\`

If the target has early disease:

\`PLAYER X has early symptoms of DISEASE X.\`

If the target has advanced disease:

\`PLAYER X has advanced DISEASE X. If untreated, the disease may worsen tomorrow.\`

If the target has Celium Decay:

\`PLAYER X has Celium Decay Stage 1.\`

If the target has severe Celium Decay:

\`PLAYER X has advanced Celium Decay. If untreated, they may lose access to their role.\`

---

# Disease Control

The Medic is the main safeguard against diseases on The Island.

If disease or illness appears, the Medic may be able to cure:

- One infected player
- The entire Island, depending on the disease or situation

Without the Medic, players have a greater chance of becoming ill from unwanted pathogens.

The exact effects of disease depend on the Game Host and the disease involved.

---

# Curing Disease

The Medic may cure disease depending on the condition and the situation.

Curing a disease may use one of the Medic’s normal daily actions unless the Game Host rules otherwise.

A cure may target:

- One infected player
- The entire Island
- A specific disease outbreak
- A decay effect, if the Medic is capable of curing it

The Medic is the main role capable of curing **Celium Decay** unless another role or item specifically says otherwise.

---

# Extra Action

If the Medic receives an **Extra Action**, they may heal or poison one additional player that day.

The extra target must be a unique player who was not already affected by the Medic that day.

If the Medic uses the Extra Action to poison, they may poison a second player that day.

### Example

The Medic’s normal actions:

- Heal Player X
- Poison Player Y

With an Extra Action, the Medic may also:

- Heal Player Z
- Poison Player Z

The Medic cannot use the Extra Action on Player X or Player Y because they were already targeted by the Medic that day.

---

# Extra Action and Diagnosis

Diagnosis is separate from the Medic’s normal heal and poison actions.

Receiving an Extra Action does not give the Medic an additional Diagnosis unless the Game Host specifically allows it.

The Medic normally only gets **1 Diagnosis per day**.

---

# Global Announcements

Most Medic healing and poisoning actions are not globally announced unless the Game Host decides otherwise.

The following Medic actions are globally announced:

- \`MEDIC has cured The Island of DISEASE X\`
- \`MEDIC has cured PLAYER X of DISEASE X\`


The following Medic actions are not normally globally announced:

- Healing
- Poisoning
- Diagnosis
- Failed cures
- Direction of treatment or poison

---

# Interrogation and Luminous Seashell Information

If the Medic is revealed through a successful **Interrogation** or **Luminous Seashell**, possible information includes:

- \`MEDIC will heal PLAYER X\`
- \`MEDIC will poison PLAYER X\`
- \`MEDIC will diagnose PLAYER X\`
- \`MEDIC will cure PLAYER X\`
- \`MEDIC will cure THE ISLAND\`
- \`MEDIC is voting for PLAYER X\`

Examples:

- \`MEDIC will heal PLAYER X\`
- \`MEDIC will poison PLAYER Y\`
- \`MEDIC will diagnose PLAYER X\`
- \`MEDIC will cure PLAYER X\`
- \`MEDIC is voting for PLAYER Y\`

If direction information is revealed, it may be shown as:

- \`MEDIC will heal PLAYER X from the North\`
- \`MEDIC will poison PLAYER Y from the South West\`

---

# Interrogator-Only Information

The Interrogator may also receive information about what the Medic did on the previous day.

Possible previous-day information:

- \`MEDIC healed PLAYER X\`
- \`MEDIC poisoned PLAYER X\`
- \`MEDIC diagnosed PLAYER X\`
- \`MEDIC cured PLAYER X of DISEASE X\`
- \`MEDIC cured The Island of DISEASE X\`
- \`MEDIC voted for PLAYER X\`

Examples:

- \`MEDIC healed PLAYER X\`
- \`MEDIC poisoned PLAYER Y\`
- \`MEDIC diagnosed PLAYER Z\`
- \`MEDIC cured PLAYER X of Celium Decay\`
- \`MEDIC voted for PLAYER Y\`

If direction information is revealed, it may be shown as:

- \`MEDIC healed PLAYER X from the East\`
- \`MEDIC poisoned PLAYER Y from the North West\``,Be=`## Mimic Ability

The Mimic may copy one ability from any role currently on The Island.

The Mimic performs that ability as if they had that role for the day.

Announcements of the Mimic can now include the Direct role. For Example Mimicking a Tailor can now be globally announced as if that Tailor did that explicitly.

\`TAILOR has made SPECIAL CLOTHING\`
or
\`TAILOR PLAYER NAME has made SPECIAL CLOTHING\`

---

## Role Availability

The Mimic can only copy roles from survivors currently on The Island.

The Mimic cannot copy roles from dead, kicked off, exiled, or removed players.

---

## Repeat Restriction

The Mimic cannot mimic the same role twice in a row.

---

## Jail Rule

The Mimic can use their Secret Role while in Jail.

---

## Extra Action Restriction

No Extra Action can be taken with this Secret Role.`,De=`## Description

The Nightguard is the Main Protector of The Island against threats. They keep watch over the Island’s approaches and can intervene when danger strikes.

---

## Core Information

- The Nightguard has a passive **35% chance** of surviving an attack (regardless of direction).
- Each night, the Nightguard must choose **one stance**:
    1. **Watch a Direction** _(default)_
    2. **Bodyguard a Player** _(requires the Machete From Hell)_

---

## Directions (8)

The Nightguard can watch from **8 directions**:

- North
- North East
- East
- South East
- South
- South West
- West
- North West

---

## What the Nightguard Can See

### Without the Machete From Hell

If the Nightguard is watching the correct direction, they can see:

- **Cannibal attacks**
- **Werewolf attacks**
- **Assassination attempts** _(successful or failed)_

**Identity Rules**

- If the Nightguard sees a **Cannibal** attack, they are told **who the Cannibal is**.
- If the Nightguard sees a **Werewolf** attack, they are only told they saw **a Werewolf** (not the identity).

**Important**

- The Nightguard **cannot see poisoning attempts** without the Machete From Hell.
- The Nightguard **cannot intercept/protect** anything without the Machete From Hell.

### With the Machete From Hell

If the Nightguard is watching the correct direction **or** Bodyguarding, they can also see:

- **Poisoning attempts**, and they will be told **who is poisoning**.

---

## Abilities

## 1) Watch a Direction (Default Stance)

Each night, the Nightguard chooses **1 direction** to watch.

If a threat occurs in that watched direction:

- The Nightguard can **see** the threat (per the rules above).
- If the Nightguard has the **Machete From Hell**, they may choose to **Intercept** or **Let It Pass**.
- If the Nightguard does **not** have the Machete, they may only **observe** (no intercept).

### A) Intercept (Protect) — Requires Machete From Hell

- The Nightguard attempts to stop the threat.
- **Attacks / Assassinations:** **50%** chance to successfully protect the targeted player (only if the threat is in their watched direction).
- **Poisoning:** The Nightguard may stop poisoning using **Divine Glimpse** (below).

### B) Let It Pass

- The Nightguard may allow the threat to resolve normally.

**Global Announcement Rule (Let It Pass)**

- If the Nightguard truly saw the threat and chose to let it pass, a global announcement will occur:
    - \`PLAYER X has been attacked. THE NIGHTGUARD saw it.\`
- This announcement does **not** reveal the attacker, the direction, or the role.

---

## 2) Bodyguard (Stance) — Requires Machete From Hell

Instead of choosing a direction, the Nightguard may choose **1 player** to focus on entirely for the night.

- While Bodyguarding, the Nightguard is **not watching any direction**.

**Bodyguard Effect**

- Any **attack** or **assassination attempt** against the guarded player is **stopped**.
- Any **poisoning attempt** against the guarded player can be stopped using **Divine Glimpse** (below).

---

## 3) Divine Glimpse (Poison Interception) — Requires Machete From Hell

If a **poisoning attempt** occurs:

- in the Nightguard’s watched direction **or**
- against the player the Nightguard is Bodyguarding,  
    then the Nightguard:
- can see **who is poisoning**, and
- may choose to **stop** the poisoning attempt from happening or **let it pass**.

---

## 4) Night’s Watch

The Nightguard fully illuminates **one side** of the Island for the night.

- Choose **one cardinal side**: **North / East / South / West**.
- That night, the Nightguard is treated as watching **3 directions**:
    - **North** illuminates: **North West, North, North East**
    - **East** illuminates: **North East, East, South East**
    - **South** illuminates: **South East, South, South West**
    - **West** illuminates: **South West, West, North West**

**Rules**

- Night’s Watch may be used whether or not the Nightguard has the Machete.
- Night's Watch removes the natural armor the Nightguard has. (From 35% to 0%)
- Night’s Watch changes only what they can **see**; it does not grant Intercept without the Machete.
- If the Nightguard has the Machete, they may Intercept threats occurring in any of the illuminated directions. This also means they are not debuffed and will stay with the 50% chance of protecting themselves or the player. 

---

## 5) Lockdown

The Nightguard locks the Island to everyone’s position for the day.

**Effect**

- During Lockdown, any action that uses a **directional position** must be done from the **same direction the player used the day before**.
- Players are considered “held” to their prior side of the Island for directional resolution.

**Notes**

- Lockdown does **not** stop actions. It only locks directions/positions.

**Cooldown: 3 days**

---

## IMPORTANT RESTRICTION

- **Night’s Watch and Lockdown cannot be used on the same day.**
    - If the Nightguard chooses **Lockdown**, they may not use **Night’s Watch** that day/night.
    - If the Nightguard chooses **Night’s Watch**, they may not use **Lockdown** that day.

---

## Lying / Reporting

- It is up to the Nightguard to share what they saw.
- The Nightguard **can be lied to**:
    - An announcement may go out if the Nightguard is told there was an attack.
    - An announcement may not go out if the Nightguard is told there was no attack.
---

## GLOBAL ANNOUNCEMENTS FOR NIGHTGUARD

- \`THE NIGHTGUARD has spotted the CANNIBAL\`
- \`THE NIGHTGUARD has spotted the WEREWOLF\`
- \`THE NIGHTGUARD has protected PLAYER X from CANNIBAL\`
- \`THE NIGHTGUARD has protected PLAYER X from WEREWOLF\`
- \`THE NIGHTGUARD has protected PLAYER X from an ASSASSINATION\`
- \`THE NIGHTGUARD has protected PLAYER X from POISON\`
- \`THE NIGHTGUARD was unable to protect PLAYER X from CANNIBAL\`
- \`THE NIGHTGUARD was unable to protect PLAYER X from WEREWOLF\`
- \`THE NIGHTGUARD was unable to protect PLAYER X from an ASSASSINATION\`
- \`THE NIGHTGUARD was unable to protect PLAYER X from POISON\`
- \`THE NIGHTGUARD has received the MACHETE FROM HELL\`
- \`PLAYER X has been attacked. THE NIGHTGUARD saw it.\`
- \`THE NIGHTGUARD has enacted NIGHT'S WATCH\`
- \`THE NIGHTGUARD has enacted LOCKDOWN\`

---

## What information is given during Successful Interrogation or Luminous Shell?

- \`NIGHTGUARD is watching DIRECTION NAME\`
- \`NIGHTGUARD is using NIGHT'S WATCH on SIDE\`
- \`NIGHTGUARD is using LOCKDOWN\`
- \`NIGHTGUARD is bodyguarding PLAYER X\`
- \`NIGHTGUARD is using DIVINE GLIMPSE\`
- \`NIGHTGUARD saw PLAYER X attacked\`
- \`NIGHTGUARD saw PLAYER X as the CANNIBAL\`
- \`NIGHTGUARD saw the WEREWOLF\`
- \`NIGHTGUARD is voting for PLAYER X\`

**The Following is for the Interrogator Only. The Day Before:**

- \`NIGHTGUARD watched DIRECTION NAME\`
- \`NIGHTGUARD used NIGHT'S WATCH on SIDE\`
- \`NIGHTGUARD used LOCKDOWN\`
- \`NIGHTGUARD bodyguarded PLAYER X\`
- \`NIGHTGUARD used DIVINE GLIMPSE\`
- \`NIGHTGUARD voted for PLAYER X\`

---

## What is the Extra Action the Nightguard can make?

- The Nightguard may take an Extra Action to **watch an additional direction** that night.
- This cannot be used on the same night as **Bodyguard** (since Bodyguard replaces directional watching).`,Ne=`## Overview & Lore

The **Priest** is bestowed with a powerful relic and the ability to return lost souls to The Island.

The Priest is one of the strongest protection roles because they can shield a player from nearly all forms of harm. They also have the rare ability to bring back a player who has died or been kicked off, as long as that player is not restricted from returning.

The Priest’s power is protective, sacred, and dangerous when used at the right time.

---

## Core Information

The Priest has two major abilities:

1. **Cross Pendant**
2. **Resurrection**

The **Cross Pendant** protects one player for a day.

**Resurrection** allows the Priest to bring back a player who is no longer on The Island.

---

# Abilities

## Cross Pendant

The Priest has a **Cross Pendant** that can be given to one player each day.

The Priest may give the Cross Pendant to:

- Another player
- Themselves

The Cross Pendant only lasts for **1 day**.

After that day ends, the Priest must choose a new player to receive it.

The same player cannot receive the Cross Pendant **2 days in a row**.

---

## Cross Pendant Protection

The player wearing the Cross Pendant is completely protected from most forms of harm.

The wearer is immune to:

- Poison
- Damage
- Death
- Assassin kills
- Cannibal attacks
- Werewolf attacks
- Special Events that deal damage or kill

The Cross Pendant only fails if an event or ability specifically says it cancels out or ignores the Cross Pendant.

### Example

If Player X has the Cross Pendant and the Assassin attempts to kill them, Player X survives.

If Player X is poisoned, the poison has no effect.

If a Special Event causes damage, Player X ignores it unless the event specifically says it bypasses the Cross Pendant.

---

## Wizard Restriction

If the Cross Pendant is given to the **Wizard**, the Wizard cannot cast spells for that day.

The Wizard still receives the protection from the Cross Pendant, but they lose access to their spells while wearing it.

---

# Resurrection

The Priest may bring back one player who is no longer on The Island.

This can include a player who was:

- Killed
- Kicked off The Island

However, the Priest cannot bring back a player who is restricted from returning.

---

## Resurrection Cooldown

The Priest’s resurrection ability has a **3-day cooldown**.

After the Priest brings someone back, they must wait 3 days before using Resurrection again.

### Example

The Priest resurrects Player X on Day 4.

The Priest cannot resurrect another player again until the cooldown is over.

---

# Extra Action

If the Priest receives an **Extra Action**, they are given a second Cross Pendant to hand out that day.

This means the Priest may protect two different players on the same day.

The normal Cross Pendant restrictions still apply.

The Priest cannot give a Cross Pendant to a player who had one the previous day.

The Priest also cannot give both Cross Pendants to the same player.

### Example

On Day 5, the Priest gives one Cross Pendant to Player X.

With an Extra Action, the Priest may give a second Cross Pendant to Player Y.

The Priest cannot give both Pendants to Player X.

---

# Global Announcements

The following Priest actions are globally announced:

- \`PLAYER X has been RESURRECTED\`
- \`PLAYER X has been BROUGHT BACK\`
- \`PLAYER X has been given the CROSS PENDANT\`

Examples:

- \`PLAYER X has been RESURRECTED\`
- \`PLAYER X has been given the CROSS PENDANT\`

The Game Host may choose either “resurrected” or “brought back” depending on whether the player died or was kicked off.

---

# Interrogation and Luminous Shell Information

If the Priest is revealed through a successful **Interrogation** or **Luminous Shell**, possible information includes:

- \`PRIEST is giving the CROSS PENDANT to PLAYER X\`
- \`PRIEST is resurrecting PLAYER X\`
- \`PRIEST is voting for PLAYER X\`

Examples:

- \`PRIEST is giving the CROSS PENDANT to PLAYER X\`
- \`PRIEST is resurrecting PLAYER X\`
- \`PRIEST is voting for PLAYER Y\`

---

## Interrogator-Only Information

The Interrogator may also receive information about what the Priest did on the previous day.

Possible previous-day information:

- \`PRIEST gave the CROSS PENDANT to PLAYER X\`
- \`PRIEST resurrected PLAYER X\`
- \`PRIEST voted for PLAYER X\``,Ye=`## Overview & Lore

The **Scavenger** searches the forgotten parts of **The Island** for strange artifacts, lost relics, and unstable objects left behind by those who came before.

---

# Core Information

The Scavenger searches for **Artifacts**.

Each day, the Scavenger may go out and search The Island.

When searching, the Scavenger has a:

- **50% chance** to find an Artifact
- **50% chance** to find nothing

The Scavenger does not find normal food items through this role.

---

# Artifact Availability

The artifacts available on The Island are completely random each day.

Before or during the Scavenger’s search, the Game Host determines what kind of artifact can be found that day.

The Scavenger does not choose which artifact category is available.

If the Scavenger successfully finds an artifact, the artifact found comes from the active artifact type or active artifact pool for that day.

---

# Indiana Jones Satchel

If the Scavenger has the **Indiana Jones Satchel**, they become more likely to find artifacts.

The Indiana Jones Satchel gives the Scavenger:

- **+5% chance to find an Artifact**

This changes the Scavenger’s artifact find chance from:

- **50% → 55%**

The Indiana Jones Satchel does not allow the Scavenger to choose what artifact is available.

It only increases the chance of successfully finding one.

---

# Holding Artifacts

The Scavenger is allowed to hold onto artifacts and use them on a later day.

Artifacts do not have to be used on the same day they are found.

The Scavenger may keep found artifacts unless another rule, role, or item causes them to be stolen, removed, destroyed, or lost.

---

# Top 4 Artifact Removal

Once The Island reaches the **Top 4**, all unused Scavenger artifacts are taken away.

This means:

- The Scavenger cannot hold old artifacts into the Top 4.
- Any unused artifacts in the Scavenger’s possession are removed.
- Artifacts found before the Top 4 must be used before then or they are lost.

This prevents powerful artifacts from being saved too late into the game.

---

# Artifact Search Example

On Day 3, the Scavenger searches The Island.

The Scavenger has a **50% chance** to find an artifact.

If the Scavenger has the **Indiana Jones Satchel**, the chance becomes **55%**.

The Game Host determines that the active artifact pool for that day is **Celium Pieces**.

If the Scavenger succeeds, they find a Celium Piece.

If the Scavenger fails, they find nothing.

---

# Global Announcements

\`SCAVENGER failed to Find an Artifact\`
\`SCAVENGER found ARTIFACT\`

---

# Interrogation and Luminous Seashell Information

If the Scavenger is revealed through a successful **Interrogation** or **Luminous Seashell**, possible information includes:

- \`SCAVENGER is searching for an Artifact\`
- \`SCAVENGER found an Artifact\`
- \`SCAVENGER found ARTIFACT NAME\`
- \`SCAVENGER is using ARTIFACT NAME\`
- \`SCAVENGER is voting for PLAYER X\`

Depending on how much information the Game Host wants revealed, the exact artifact name may or may not be shown.

---

# Interrogator-Only Information

The Interrogator may also receive information about what the Scavenger did on the previous day.

Possible previous-day information:

- \`SCAVENGER searched for an Artifact\`
- \`SCAVENGER found an Artifact\`
- \`SCAVENGER found ARTIFACT NAME\`
- \`SCAVENGER used ARTIFACT NAME\`
- \`SCAVENGER voted for PLAYER X\``,Fe=`---
tags:
  - "#Artisans"
---
## Overview & Lore

The **Tailor** is one of the most important survival roles on **The Island**.

While the Builder protects The Island through structures, the Tailor protects The Island through clothing, equipment, and carefully made survival gear. The right clothing can help players survive harsh weather, avoid sickness, and support the food-gathering roles.

The Tailor is especially important because bad clothing during dangerous weather can lead to negative consequences for everyone.

The Tailor is also capable of making special gear for individual players, allowing certain roles to perform better or giving survivors a way to carry important items.

---

# Core Information

The Tailor has two main responsibilities:

1. **Make clothes for the whole Island**
2. **Make Special Clothing or Special Gear for specific players**

The Tailor makes general Island clothing **one day ahead of time**.

This means the clothes made today are meant to be worn tomorrow.

Special Clothing and Special Gear are different. These can be made and used on the same day.

---

# Island Clothing

The Tailor makes clothes for everyone on The Island.

The goal is to make clothes that match the next day’s weather.

If the Tailor makes the correct type of clothing, The Island is better protected from weather-related consequences.

If the Tailor makes the wrong type of clothing, players may suffer negative effects.

These negative effects may include:

- Increased chance of disease
- Weather-related damage
- Food loss
- Other consequences decided by the Game Host

---

## Clothing Timing

The Tailor does not make normal Island clothing on the day it is needed.

They make it the day before.

### Example

On **Day 2**, the Tailor makes clothes for **Day 3**.

On **Day 3**, The Island wears the clothes that were made on Day 2.

This means the Tailor must predict or respond to what the weather will be before it happens.

---

# If the Tailor Leaves The Island

If the Tailor is killed or kicked off The Island, the last clothing they made remains in use.

However, that clothing begins to decay.

After **2 days**, the clothing becomes worn down and unreliable.

Once the clothing decays, The Island has an increased chance of disease.

### Example

The Tailor is removed on Day 5.

The last clothing they made remains usable for Day 6 and Day 7.

After that, the clothing decays, increasing the chance of disease.

---

# Special Clothing and Special Gear

The Tailor can also make **Special Clothing** and **Special Gear** for specific players or roles.

Special Clothing and Special Gear only last for **1 day**, unless stated otherwise.

A new piece must be made again if the Tailor wants that player or role to receive the benefit on another day.

The Tailor may normally make **1 piece of Special Clothing or Special Gear per day**.

---

# Special Clothing Options

## Old McDonald’s Overalls

The Tailor may make **Old McDonald’s Overalls** for the Farmer.

While wearing Old McDonald’s Overalls, the Farmer is guaranteed to have a successful harvest regardless of weather.

This means the Farmer’s crop succeeds even if the weather would normally lower the chance.

---

## Jeremy Wade’s Net

The Tailor may make **Jeremy Wade’s Net** for the Fisher.

While using Jeremy Wade’s Net, the Fisher is guaranteed to catch a Special Item regardless of weather.

This means weather penalties do not prevent the Fisher from catching something.

---

## Robin Hood’s Hat

The Tailor may make **Robin Hood’s Hat** for the Hunter.

While wearing Robin Hood’s Hat, the Hunter is guaranteed to have a successful hunt regardless of weather.

This means the Hunter will find a Special Animal even if the weather would normally lower the chance.

---

## Indiana Jones Satchel

The Tailor may make the **Indiana Jones Satchel** for the Scavenger.

While using the Indiana Jones Satchel, the Scavenger is more likely to find artifacts.

The Scavenger gains:

- **+5% chance to find artifacts**

---

# Special Gear

## Pouch

The Tailor may make a **Pouch** for one player.

The Pouch allows that player to store **1 item** instead of being forced to use the item on the same day they receive it.

Normally, if a player receives an item, they must use it that day. With a Pouch, the player may hold onto **1 item** and use it on a later day.

---

## Pouch Rules

Only **1 Pouch** may exist on The Island at a time.

The Tailor cannot make another Pouch while a Pouch already exists.

A player with a Pouch may store **1 item**.

The stored item does not have to be used that day.

The player may choose to use the stored item on a later day.

---

## Pouch Storage Limit

A Pouch can only hold **1 item** at a time.

If the player already has an item stored, they cannot store another item unless the stored item is used, stolen, destroyed, or removed.

---

## What the Pouch Can Store

The Pouch can store:

- Lively Lemons
- Tasty Tangerine
- Trippy Tulips
- Sneaky Spinach
- Golden Apple

- Luminous Seashell
- Cursed Cuttlefish Ink
- The Black Pearl

- Parlay Prism
- Revelation Quartz
- Purity Stone
- Karmic Vessel

- Octane Stimulant
- Suppressant Dose
- Invisibility Potion

- Ethereal Eagle
- Envious Fox
- Mystical Owl
- Jinxed Jackrabbit

- DoorDashed Box Combo

---

## Pouch Removal

If the player holding the Pouch is **kicked off The Island** or **dies**, the Pouch is removed from the game.

The Pouch does **not** return to The Island with that player.

If the player had an item stored inside the Pouch when they were removed, the stored item is also lost unless the Game Host decides another effect preserves it.

---

## Pouch Duration

The Pouch remains with the player until one of the following happens:

- The player is killed.
- The player is kicked off The Island.
- The Pouch is destroyed.
- Another effect removes the Pouch.

The Pouch does not disappear simply because the stored item is used.

However, it can still only hold **1 item** at a time.

---

# Extra Action

If the Tailor receives an **Extra Action**, they may make one additional piece of Special Clothing or Special Gear.

The second piece must go to a different role or player.

### Example

The Tailor makes Old McDonald’s Overalls for the Farmer.

With an Extra Action, the Tailor may also make Jeremy Wade’s Net for the Fisher.

### Pouch Restriction With Extra Action

The Extra Action does not allow the Tailor to make a second Pouch.

Only **1 Pouch** may exist on The Island at a time.

---

# Global Announcements

The following Tailor actions are globally announced:

- \`TAILOR has made CLOTHES for The Island\`
- \`TAILOR has made SPECIAL CLOTHES for PLAYER X\`
- \`TAILOR has made SPECIAL GEAR for PLAYER X\`

Examples:

- \`TAILOR has made CLOTHES for The Island\`
- \`TAILOR has made Old McDonald's Overalls for PLAYER X\`
- \`TAILOR has made Jeremy Wade's Net for PLAYER X\`
- \`TAILOR has made Robin Hood's Hat for PLAYER X\`
- \`TAILOR has made Indiana Jones Satchel for PLAYER X\`
- \`TAILOR has made a Pouch for PLAYER X\`

---

# Interrogation and Luminous Seashell Information

If the Tailor is revealed through a successful **Interrogation** or **Luminous Seashell**, possible information includes:

- \`TAILOR is making CLOTHES for tomorrow\`
- \`TAILOR is making SPECIAL CLOTHES for PLAYER X\`
- \`TAILOR is making SPECIAL GEAR for PLAYER X\`
- \`TAILOR is voting for PLAYER X\`

Examples:

- \`TAILOR is making CLOTHES for tomorrow\`
- \`TAILOR is making Old McDonald's Overalls for PLAYER X\`
- \`TAILOR is making Jeremy Wade's Net for PLAYER X\`
- \`TAILOR is making Robin Hood's Hat for PLAYER X\`
- \`TAILOR is making Indiana Jones Satchel for PLAYER X\`
- \`TAILOR is making a Pouch for PLAYER X\`
- \`TAILOR is voting for PLAYER X\`

---

# Interrogator-Only Information

The Interrogator may also receive information about what the Tailor did on the previous day.

Possible previous-day information:

- \`TAILOR made CLOTHES for The Island\`
- \`TAILOR made SPECIAL CLOTHES for PLAYER X\`
- \`TAILOR made SPECIAL GEAR for PLAYER X\`
- \`TAILOR voted for PLAYER X\`

Examples:

- \`TAILOR made CLOTHES for The Island\`
- \`TAILOR made Old McDonald's Overalls for PLAYER X\`
- \`TAILOR made Jeremy Wade's Net for PLAYER X\`
- \`TAILOR made Robin Hood's Hat for PLAYER X\`
- \`TAILOR made Indiana Jones Satchel for PLAYER X\`
- \`TAILOR made a Pouch for PLAYER X\`
- \`TAILOR voted for PLAYER X\``,Ge=`---
tags:
  - "#Support"
---
## Overview & Lore

The **Teacher** is a resource of knowledge for The Island.

The Teacher does not rely on weapons, food, or shelter. Instead, they change the way players understand and use their roles. The Teacher can strengthen a player for the day through a powerful buff, or completely teach a player a new role and replace what they were before.

The Teacher is one of the most influential support roles because they can improve other players, protect them from false information, and even reshape the role structure of The Island.

---

## Core Information

The Teacher has two main abilities:

1. **Teach a Role**
2. **Teacher Buff**

Teaching a role is a major ability with a cooldown.

The Teacher Buff is a daily support ability that lasts for one day.

---

# Teach a Role

The Teacher may teach a player a different role.

This new role can be any role, even if that role is not currently on The Island.

Teaching a role has a **3-day cooldown**.

---

## Teaching Rules

Teaching a role is entirely the Teacher’s decision.

The receiving player does **not** need to consent.

When a player is taught a new role, their old role is replaced.

The player cannot use the newly taught role on the same day they receive it.

If their previous role already took an action that day, that action still remains.

### Example

Player X is the Farmer.

On Day 4, the Farmer grows and uses a crop.

Later that day, the Teacher teaches Player X the Medic role.

Player X is now the Medic, but they cannot use Medic abilities until the next day.

The crop action from earlier that day still happened.

---

## Role Replacement

When the Teacher teaches a player a new role:

- The player loses their old role.
- The player becomes the new role.
- The new role starts on the following day.
- Any action already taken by the old role still counts.
- Any cooldowns or restrictions should be handled by the Game Host depending on the role being taught.

---

# Teacher Buff

The Teacher may buff one player each day.

The Teacher Buff lasts for **1 day**.

After the day ends, the buff disappears and must be reapplied if the Teacher wants someone to receive it again.

The same player cannot receive the Teacher Buff **2 days in a row**.

---

## Teacher Buff Effects

The Teacher Buff strengthens the player based on what they are doing or what is being applied to them.

The Teacher Buff can do the following:

- Prevent false information from being given to the buffed player
- Increase healing or poison applied by the buffed player by **+1**
- Increase healing received by the buffed player by **+1**
- Decrease poison received by the buffed player by **-1**
- Increase Blacksmith Armor given to the buffed player to **75% survival chance**
- Make Interrogation **100% successful**
- Increase assassination success chance by **+12.5%**
- Increase the Farmer, Fisher, Hunter, and Scavenger’s success chances by **+10%**

---

# Extra Action

If the Teacher receives an **Extra Action**, they may buff one additional player that day.

The same restriction still applies:

- A player cannot receive the Teacher Buff two days in a row.
- The Teacher cannot buff the same player twice on the same day.

### Example

The Teacher buffs Player X.

With an Extra Action, the Teacher may also buff Player Y.

They cannot use both buffs on Player X.

---

# Global Announcements

The following Teacher actions are globally announced:

- \`TEACHER has taught ROLE to PLAYER X\`
- \`TEACHER has buffed PLAYER X\`

Examples:

- \`TEACHER has taught Medic to PLAYER X\`
- \`TEACHER has taught Assassin to PLAYER X\`
- \`TEACHER has buffed PLAYER X\`

---

# Interrogation and Luminous Seashell Information

If the Teacher is revealed through a successful **Interrogation** or **Luminous Seashell**, possible information includes:

- \`TEACHER will buff PLAYER X\`
- \`TEACHER will teach ROLE to PLAYER X\`
- \`TEACHER is voting for PLAYER X\`

Examples:

- \`TEACHER will buff PLAYER X\`
- \`TEACHER will teach Farmer to PLAYER X\`
- \`TEACHER is voting for PLAYER Y\`

---

## Interrogator-Only Information

The Interrogator may also receive information about what the Teacher did on the previous day.

Possible previous-day information:

- \`TEACHER buffed PLAYER X\`
- \`TEACHER taught ROLE to PLAYER X\`
- \`TEACHER voted for PLAYER X\``,xe=`## Overview

Kills anyone they want on the Island on the **Full Moon** or **Blood Moon**.

They choose the side of the Island they want to attack from either North, East, West, or South just like the Cannibal.

If their target is protected in some way the attack will be mentioned as a failed attempt.

Even if they are spotted their Identity is kept a Secret.

---

# Attack Timing

The Werewolf can only kill on the:

- Full Moon
- Blood Moon

---

# Attack Direction

When attacking, the Werewolf chooses the side of the Island they want to attack from.

The Werewolf may choose:

- North
- North East
- East
- South East
- South
- South West
- West
- North West

---

# Failed Attack

If their target is protected in some way, the attack will be mentioned as a failed attempt.

---

# Identity

Even if the Werewolf is spotted, their Identity is kept a Secret.

---

# Global Announcements for Werewolf

- \`PLAYER X has been killed by the WEREWOLF\`
- \`WEREWOLF has failed to kill PLAYER X\`

---

# Successful Interrogation Information

What information is given during Successful Interrogation?

- \`WEREWOLF PLAYER NAME used their Secret Role yesterday\`

---

# Extra Action

No Extra Action can be taken with this Secret Role.`,Xe=`## Overview

Has a variety of spells to use to either help or threaten the Island.

The Wizard can bypass being jailed, however the only things that can prevent the Wizard from casting a spell is the Priest’s Charm, another form of disabling a role, and if the whole Island is weakened by an event.

The Wizard is able to pass a Normal spell and a Special Spell in the same day.

---

# Basic Spells

## Poison Mist

- A survivor will lose 3 Heart Points and 3 Hunger Points

---

## Weaken

- Prevents a survivor from doing their role and ability to vote

---

## Great Heal

- A survivor will gain 3 Heart Points and 3 Hunger Points

---

## False Voting

- An ability to cast an additional vote

---

# Advanced Spells

## Role Switch

- Permanently switch 2 peoples roles. Can't use this spell again for 3 days.
- Roles to be switched must still be on The Island when the spell is casted.

---

## Immunity

- Grants immunity to being kicked off The Island. Can't use this spell again for 4 days.

---

## Revive

- Brings back a person who was killed. Can't use this spell again for 3 days.

---

## Return

- Brings back a person who was kicked off. Can't use this spell again for 3 days.

---

## Charm

- Takes full control of a Player which includes their actions, their vote.

---

# Global Announcements for Wizard

- \`PLAYER X has been weakened\`
- \`PLAYER X and PLAYER Y's roles have been swapped\`
- \`PLAYER X has been granted IMMUNITY\`
- \`PLAYER X has been REVIVED/BROUGHT BACK\`
- \`A POWERFUL CHARM has been broken\`
    - This is said on the Following Day after the Charm Spell was casted

---

# Successful Interrogation Information

What information is given during Successful Interrogation?

- \`PLAYER NAME used their Secret Role yesterday\`

---

# Extra Action

No Extra Action can be taken with this Secret Role.`,We={class:"roles-page"},Ue={class:"roles-hero"},_e={class:"hero-panel"},qe={class:"search-row"},Ke={class:"meta-row"},Je={class:"command-panel"},Ve={class:"roles-layout"},je={class:"role-library","aria-label":"Role library"},ze={class:"library-head"},$e={class:"role-list"},Qe={key:0,class:"empty-state"},Ze={key:1,class:"empty-state danger-state"},en=["onClick"],nn=["title"],tn={class:"role-card-copy"},an={key:0},on={key:3,class:"empty-state"},sn={key:0,class:"role-document"},rn={class:"document-hero"},ln={class:"role-type"},hn={key:0,class:"role-flavor"},cn=["innerHTML"],dn={key:1,class:"empty-state"},un={class:"command-window",role:"dialog","aria-modal":"true","aria-label":"Secure command prompt"},mn={class:"command-window-body"},yn={class:"command-row"},fn={key:0,class:"secret-dossier"},gn={class:"secret-terminal"},pn={key:0,class:"cursor"},Tn=re({__name:"TheIslandNewRoles",setup(An){const _=Object.assign({"../data/roles-md/Assassin.md":ve,"../data/roles-md/Bard.md":Ee,"../data/roles-md/Blacksmith.md":Ie,"../data/roles-md/Builder.md":be,"../data/roles-md/Cannibal-secret.md":Re,"../data/roles-md/Chemist.md":Se,"../data/roles-md/Cook.md":we,"../data/roles-md/Farmer.md":Pe,"../data/roles-md/Fisher.md":Le,"../data/roles-md/Guru.md":Ce,"../data/roles-md/Hunter.md":ke,"../data/roles-md/Interrogator.md":He,"../data/roles-md/Jailor.md":Oe,"../data/roles-md/Medic.md":Me,"../data/roles-md/Mimic-secret.md":Be,"../data/roles-md/Nightguard.md":De,"../data/roles-md/Priest.md":Ne,"../data/roles-md/Scavenger.md":Ye,"../data/roles-md/Tailor.md":Fe,"../data/roles-md/Teacher.md":Ge,"../data/roles-md/Werewolf-secret.md":xe,"../data/roles-md/Wizard-secret.md":Xe}),q=Object.assign({}),l=o([]),m=o([]),p=o("Assassin"),T=o(""),S=o(""),d=o("Awaiting clearance keyword."),y=o(""),A=o(""),w=o(!1),P=o(!1),B=o(null),D=o(null),I=o("All"),f=o("idle"),L=o("");let b=null;U.use({gfm:!0,breaks:!1});const K=g(()=>l.value.filter(a=>a.roleType==="Normal").length),J=g(()=>l.value.filter(a=>a.roleType==="Secret").length),v=g(()=>{const a=T.value.trim().toLowerCase();return l.value.filter(e=>I.value!=="All"&&e.roleType!==I.value?!1:a?[e.name,e.roleType,e.summary,e.searchableText].join(" ").toLowerCase().includes(a):!0)}),h=g(()=>{const a=v.value.find(e=>e.id===p.value);return a||(v.value[0]??l.value[0]??null)}),C=g(()=>!!N.value),N=g(()=>y.value?m.value.find(a=>a.id===y.value)??null:null);le(V),he(E),ce(h,()=>{E(),A.value="",y.value="",d.value="Awaiting clearance keyword."});async function V(){f.value="loading",L.value="";try{const a=await Promise.all(Object.entries(_).map(([e,t])=>j(e,t)));l.value=a.sort((e,t)=>e.name.localeCompare(t.name)),m.value=await Promise.all(Object.entries(q).map(([e,t])=>ae(e,t))),f.value="ready",l.value.some(e=>e.id===p.value)||(p.value=l.value[0]?.id??"")}catch(a){f.value="error",L.value=a instanceof Error?a.message:String(a)}}async function j(a,e){const t=a.split("/").pop()?.replace(/\.md$/,"")??"role",u=te(e,t),k=oe(e),H=await U.parse(e);return{id:t,name:u,roleType:t.toLowerCase().endsWith("-secret")?"Secret":"Normal",summary:k,markdown:e,html:H,searchableText:se(e)}}async function z(a){p.value=a,await W(),window.matchMedia("(max-width: 1060px)").matches&&D.value?.scrollIntoView({behavior:"smooth",block:"start"})}function $(){T.value=""}async function Q(){P.value=!0,d.value="Awaiting clearance keyword.",await W(),B.value?.focus()}function Y(){P.value=!1}async function F(){const a=S.value.trim();if(!a){d.value="Access denied. Empty command rejected.",y.value="";return}const e=await Z(a);if(e){m.value.some(t=>t.id===e.id)||(m.value=[...m.value,e]),y.value=e.id,d.value="Clearance accepted.",ee(e.text);return}E(),A.value="",y.value="",d.value="Access denied. Keyword rejected."}async function Z(a){try{const t=await Ae(a);if(t)return{id:`db:${t.id}`,name:t.name,keyword:a,text:G(t.body_markdown)}}catch(t){console.warn("Secret command database lookup failed; using local fallback.",t)}const e=a.toLowerCase();return m.value.find(t=>t.keyword.toLowerCase()===e)??null}function ee(a){E(),A.value="",w.value=!0;let e=0;b=setInterval(()=>{A.value+=a.charAt(e),e+=1,e>=a.length&&E()},12)}function E(){b&&(clearInterval(b),b=null),w.value=!1}function ne(a){return a.name.trim().charAt(0).toUpperCase()||"?"}function te(a,e){const t=a.match(/^---[\s\S]*?\nname:\s*(.+?)\n[\s\S]*?---/)?.[1];return t?R(t).trim():e.replace(/-secret$/i,"").replace(/([a-z])([A-Z])/g,"$1 $2").split(/[-_\s]+/).filter(Boolean).map(u=>u.charAt(0).toUpperCase()+u.slice(1).toLowerCase()).join(" ")}async function ae(a,e){const t=a.split("/").pop()?.replace(/\.md$/,"")??"",u=t,k=t,H=e.match(/^#\s*Keyword:\s*(.+)$/im)?.[1]?.trim()??"",ie=e.replace(/^#\s*Keyword:\s*.+$/im,"").trim();return{id:u,name:k,keyword:H,text:G(ie)}}function oe(a){return a.replace(/^#{1,6}\s+.+$/gm,"").split(/\n\s*\n/).map(t=>R(t).trim()).find(t=>t&&!t.startsWith("---"))??""}function se(a){return R(a).replace(/\s+/g," ").trim()}function G(a){return R(a).split(`
`).map(e=>e.trimEnd()).join(`
`).replace(/\n{3,}/g,`

`).trim()}function R(a){return a.replace(/`([^`]+)`/g,"$1").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/^[-*]\s+/gm,"").replace(/^#{1,6}\s+/gm,"")}return(a,e)=>(r(),s(X,null,[de(Te),n("div",We,[n("header",Ue,[e[5]||(e[5]=n("div",{class:"hero-copy"},[n("p",{class:"eyebrow"},"Classified Island Archive"),n("h1",null,"Role Dossiers"),n("p",null," Authorized terminal access for role mechanics, covert procedures, public announcements, and host-facing intelligence files. ")],-1)),n("div",_e,[e[3]||(e[3]=n("div",{class:"terminal-bar"},[n("span"),n("span"),n("span"),n("strong",null,"SECURE QUERY")],-1)),e[4]||(e[4]=n("label",{for:"role-search"},"Search classified files",-1)),n("div",qe,[O(n("input",{id:"role-search","onUpdate:modelValue":e[0]||(e[0]=t=>T.value=t),class:"search",type:"text",placeholder:"Search poison, Machete, Secret Role...",spellcheck:"false"},null,512),[[x,T.value]]),T.value?(r(),s("button",{key:0,class:"clear-btn",type:"button",onClick:$}," Clear ")):c("",!0)]),n("div",Ke,[n("span",null,i(v.value.length)+" visible",1),n("span",null,i(K.value)+" normal",1),n("span",null,i(J.value)+" secret",1)]),n("div",Je,[n("button",{class:"command-launch",type:"button",onClick:Q}," Access Command Prompt "),n("p",{class:M(["command-status",{unlocked:C.value}])},i(d.value),3)])])]),n("main",Ve,[n("aside",je,[n("div",ze,[n("div",null,[e[6]||(e[6]=n("span",null,"Archive Index",-1)),n("strong",null,i(l.value.length)+" files",1)]),O(n("select",{"onUpdate:modelValue":e[1]||(e[1]=t=>I.value=t),class:"type-filter","aria-label":"Filter role type"},e[7]||(e[7]=[n("option",{value:"All"},"All",-1),n("option",{value:"Normal"},"Normal",-1),n("option",{value:"Secret"},"Secret",-1)]),512),[[ue,I.value]])]),n("div",$e,[f.value==="loading"?(r(),s("div",Qe," Loading classified index... ")):f.value==="error"?(r(),s("div",Ze,i(L.value),1)):(r(!0),s(X,{key:2},me(v.value,t=>(r(),s("button",{key:t.id,type:"button",class:M(["role-card",{active:t.id===p.value}]),onClick:u=>z(t.id)},[n("span",{class:"role-mark",title:`${t.name} icon`},i(ne(t)),9,nn),n("span",tn,[n("strong",null,i(t.name),1),n("small",null,i(t.roleType)+" Dossier",1),t.summary?(r(),s("em",an,i(t.summary),1)):c("",!0)])],10,en))),128)),f.value==="ready"&&!v.value.length?(r(),s("div",on," No roles match your search. ")):c("",!0)])]),n("section",{ref_key:"roleReader",ref:D,class:"role-reader"},[h.value?(r(),s("article",sn,[n("div",rn,[n("div",null,[n("p",ln,i(h.value.roleType)+" Dossier",1),n("h2",null,i(h.value.name),1),h.value.summary?(r(),s("p",hn,i(h.value.summary),1)):c("",!0)])]),h.value.html?(r(),s("div",{key:0,class:"markdown-body",innerHTML:h.value.html},null,8,cn)):c("",!0)])):(r(),s("div",dn," Select a role to view details. "))],512)]),P.value?(r(),s("div",{key:0,class:"command-overlay",onClick:ye(Y,["self"])},[n("section",un,[n("div",{class:"command-window-bar"},[e[8]||(e[8]=n("div",{class:"terminal-bar command-window-dots"},[n("span"),n("span"),n("span"),n("strong",null,"ISLAND SECURE SHELL")],-1)),n("button",{class:"command-close",type:"button",onClick:Y}," CLOSE ")]),n("div",mn,[e[13]||(e[13]=n("p",{class:"command-window-label"}," Island encrypted extension console ",-1)),n("div",yn,[e[9]||(e[9]=n("span",{class:"command-prefix"},"island://secure>",-1)),O(n("input",{ref_key:"commandInput",ref:B,"onUpdate:modelValue":e[2]||(e[2]=t=>S.value=t),class:"command-input",type:"text",placeholder:"Enter clearance keyword...",spellcheck:"false",onKeyup:fe(F,["enter"])},null,544),[[x,S.value]]),n("button",{class:"clear-btn",type:"button",onClick:F}," Execute ")]),n("p",{class:M(["command-status",{unlocked:C.value}])},i(d.value),3),C.value&&N.value?(r(),s("section",fn,[e[12]||(e[12]=n("div",{class:"secret-head"},[n("p",null,"Encrypted Extension")],-1)),n("div",gn,[e[10]||(e[10]=n("div",{class:"secret-terminal-line muted"}," island://secure> decrypt file ",-1)),e[11]||(e[11]=n("div",{class:"secret-terminal-line"}," ACCESS GRANTED. STREAMING DECRYPTED PAYLOAD... ",-1)),n("pre",null,[ge(i(A.value),1),w.value?(r(),s("span",pn,"_")):c("",!0)])])])):c("",!0)])])])):c("",!0)])],64))}}),Rn=pe(Tn,[["__scopeId","data-v-804473d1"]]);export{Rn as default};
