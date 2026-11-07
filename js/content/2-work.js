window.PILLARS.push(

{
  "id": "scheduling",
  "band": "work",
  "title": "Scheduling, coverage and autonomy",
  "icon": "calendar-days",
  "question": "How are people assigned to lines, who builds the schedule, and how much choice do people keep?",
  "why": "The service runs as several lines at once, each with its own hours and feel. Scheduling is where fairness is felt: people want choice over where and when they work, and the group needs every line covered. The decisions are how teams are formed, how autonomy is balanced against shared burden, and who builds the schedule.",
  "region": "Island Health has signalled that all lines must be open. It will probably not mind how the group gets there, provided coverage is reliable and fair enough to hold together.",
  "decisions": [
    {
      "id": "coverage-teams",
      "title": "How people are assigned to lines",
      "intro": "Each line has different hours, different call and a different feel.",
      "options": [
        {
          "name": "Fixed teams per line",
          "looks": "Named people belong to each line and rotate within it.",
          "pros": [
            "Continuity with patients and staff",
            "People build expertise",
            "Predictable for the people on it"
          ],
          "cons": [
            "A single absence can leave a line short",
            "Unpopular lines stay unpopular",
            "Hard to rebalance"
          ],
          "bestWhen": "Lines need specialized skills or relationships."
        },
        {
          "name": "One shared pool",
          "looks": "Everyone is eligible for every line, and a schedule fills lines in priority order.",
          "pros": [
            "Maximum flexibility",
            "Spreads the unpopular work",
            "Easier to cover gaps"
          ],
          "cons": [
            "Less continuity",
            "Some people may not be comfortable or credentialed everywhere",
            "Needs a fair rotation"
          ],
          "bestWhen": "Most members can work most lines."
        },
        {
          "name": "Core team plus a pool",
          "looks": "Each line has a small core, and the pool tops up what the core cannot cover.",
          "pros": [
            "Balances continuity and flexibility",
            "Gives each line a home"
          ],
          "cons": [
            "Two tiers to manage",
            "Needs clear rules for who is in the core"
          ],
          "bestWhen": "Some lines need steady faces and others just need bodies."
        }
      ]
    },
    {
      "id": "sched-autonomy",
      "title": "How much choice people have over where they work",
      "intro": "Right now line choice is entirely voluntary, and the least popular work goes unfilled.",
      "options": [
        {
          "name": "Fully voluntary",
          "flag": "The contract requires fixed minimum coverage on every line, including around-the-clock withdrawal management. Unpopular lines going uncovered means the group would not meet those minimums.",
          "looks": "Each person picks what they want to do.",
          "pros": [
            "Maximum autonomy",
            "Happy members",
            "No scheduling conflict"
          ],
          "cons": [
            "Unpopular work stays uncovered",
            "Pressure falls on a few",
            "Not a promise the region can rely on"
          ],
          "bestWhen": "There are enough volunteers for every line."
        },
        {
          "name": "Preferences with fairness rules",
          "looks": "People state preferences. The scheduler tries to spread the least popular weeks evenly, but no one has a fixed quota.",
          "pros": [
            "Respects choice",
            "Spreads burden",
            "Easy to explain"
          ],
          "cons": [
            "Needs tracking",
            "Can still leave gaps"
          ],
          "bestWhen": "Most work gets covered voluntarily but not all."
        },
        {
          "name": "Required share of hard work",
          "looks": "Each member has a fixed quota of weeks on the least popular lines or call each year, with swaps allowed.",
          "pros": [
            "Reliable",
            "Clear and fair-looking",
            "Easy to defend"
          ],
          "cons": [
            "Reduces autonomy",
            "May drive away people who value choice",
            "Need exceptions for limited roles"
          ],
          "bestWhen": "Reliability is more important than choice."
        },
        {
          "name": "Credit system",
          "looks": "No quota on any one line. Different weeks and roles earn different credits, and everyone needs a set total.",
          "pros": [
            "Rewards hard work without money",
            "Flexible about what people choose",
            "Transparent"
          ],
          "cons": [
            "Complex to design",
            "Weighting is contested",
            "Needs a tracker"
          ],
          "bestWhen": "The group wants to recognize hard-to-fill weeks but cannot change pay."
        },
        {
          "name": "Scheduling order by membership",
          "looks": "Full members choose their weeks and services first. Limited members choose from what is left. Any remaining weeks go to locums.",
          "pros": [
            "Makes full membership worth having",
            "Simple to explain and run",
            "Respects choice within each tier"
          ],
          "cons": [
            "The least popular weeks, such as withdrawal management, are likely to be left until last",
            "Limited members get less say over where they work",
            "Needs a rule for ties among full members"
          ],
          "bestWhen": "The group wants choice to be the main reward for a bigger commitment."
        }
      ]
    },
    {
      "id": "sched-who",
      "title": "Who builds the schedule",
      "intro": "The Hospitalist article notes that a leader who builds the schedule can be seen as having a conflict of interest.",
      "options": [
        {
          "name": "The leader",
          "looks": "One person does it.",
          "pros": [
            "Fast and consistent"
          ],
          "cons": [
            "Perceived conflict of interest",
            "Heavy load",
            "Single point of failure"
          ],
          "bestWhen": "The group is small and trusts the leader."
        },
        {
          "name": "A rotating scheduler",
          "looks": "A member takes the role for a set term.",
          "pros": [
            "Shared load",
            "Spreads understanding of the problem"
          ],
          "cons": [
            "Inconsistent",
            "Needs handover and written rules"
          ],
          "bestWhen": "Many members are willing to take a turn."
        },
        {
          "name": "A paid scheduler or software",
          "looks": "An administrator or tool builds the schedule from agreed rules.",
          "pros": [
            "Impartial",
            "Frees physician time",
            "Applies rules consistently"
          ],
          "cons": [
            "Needs funding and rules written precisely",
            "Needs someone to handle exceptions"
          ],
          "bestWhen": "The rules are clear and the volume is high."
        }
      ]
    }
  ],
  "questions": [
    "Which weeks or roles are least popular, and why?",
    "How much autonomy would we give up for a schedule we could trust?",
    "Do patients and staff on each line need a consistent face?",
    "What counts as an acceptable reason to swap or be excused?"
  ],
  "watch": [
    "Counting weeks only. A week with overnight call, weekends or holidays is a heavier load than one without.",
    "Rules that are written but never applied the same way twice.",
    "Writing an order that quietly depends on a few people always saying yes.",
    "Keeping the tally private. Fairness guidance recommends showing each person their own nights, weekends, holidays and call against the group’s, and checking the spread over the year."
  ],
  "sources": [
    "scheduling",
    "hospitalist",
    "guide",
    "contractTemplate",
    "equity"
  ]
},

{
  "id": "hardfill",
  "band": "work",
  "title": "Hard-to-fill work and call",
  "icon": "moon-star",
  "question": "How do we make sure the least popular weeks and call get covered, and how do we recognize the people who do them?",
  "why": "Withdrawal management runs around the clock and is the service the region cares about most, yet it is the one most people prefer to avoid. If the answer stays voluntary, the group relies on locums or a few people. The decision is what mix of obligation, recognition and support will actually work. Call is part of the same problem: on-call availability is unpaid, and withdrawal management sees few overnight calls, so call earns little and is easy to avoid.",
  "region": "This is the heart of what Island Health is buying. A credible plan here is likely to matter more to the region than anything else in the agreement. Funded call pay, through MOCAP or otherwise, would need a contract change, and requests for MOCAP have not been approved so far.",
  "related": [
    {
      "id": "structure",
      "text": "Every pay option here depends on how money flows to members."
    }
  ],
  "decisions": [
    {
      "id": "hardfill-approach",
      "title": "Who covers the hard-to-fill weeks",
      "intro": "This is about who does the work. How it is recognized is the next question.",
      "options": [
        {
          "name": "Voluntary only",
          "flag": "Most members do not want this work, so voluntary sign-up has not filled it, and the contract requires it to be covered. Filling the gap with locums is costly and is meant to be a backstop.",
          "looks": "People sign up if they want to.",
          "pros": [
            "No friction",
            "Willing people tend to do it well"
          ],
          "cons": [
            "Has not been enough",
            "Locums fill the gaps at high cost"
          ],
          "bestWhen": "A shortage is not expected."
        },
        {
          "name": "A core team",
          "current": "Current model, and it has not met the need",
          "looks": "A defined group commits to most of the work, with recognition and a say in terms.",
          "pros": [
            "Reliable and expert",
            "People who like it do more of it"
          ],
          "cons": [
            "Burnout and turnover risk",
            "Fragile when one person leaves"
          ],
          "bestWhen": "Several people are genuinely interested."
        },
        {
          "name": "Everyone rotates",
          "looks": "All members take a defined share, with swaps allowed.",
          "pros": [
            "Fair-looking",
            "Reliable",
            "Shared understanding of the work"
          ],
          "cons": [
            "Some people may not want to or may not be suited",
            "May push some out"
          ],
          "bestWhen": "The group values equal burden."
        },
        {
          "name": "Volunteers first, then a rotation fills the gaps",
          "looks": "People sign up for what they want. Any weeks left unfilled go to members in a set order, starting with whoever has done the fewest hard-to-fill weeks.",
          "pros": [
            "Keeps choice for people who like the work",
            "Guarantees every week gets covered",
            "Fair over time"
          ],
          "cons": [
            "Needs a tracker and an agreed order",
            "People may wait to be assigned rather than volunteer"
          ],
          "bestWhen": "Some people like this work but not enough to cover it all."
        },
        {
          "name": "A core team, plus required backfill from everyone",
          "looks": "A small core takes most of the weeks. Everyone else must cover what the core cannot, in a set order.",
          "pros": [
            "Keeps experienced people at the centre",
            "Protects the core from burning out",
            "Gives everyone a reason to support the core team"
          ],
          "cons": [
            "Two tiers to manage",
            "Still fragile if the core shrinks"
          ],
          "bestWhen": "A few people want to own this work and need a safety net."
        },
        {
          "name": "Everyone owes a share, with a buyout",
          "looks": "Every member owes a share of hard-to-fill weeks each year, but can pay a set rate into a group fund instead. The fund pays whoever covers those weeks.",
          "pros": [
            "Lets people who strongly avoid this work opt out on fair terms",
            "People who take extra weeks are paid for them",
            "Every week still has an owner"
          ],
          "cons": [
            "Needs pooling, with tax and legal questions to settle first",
            "Can create a group where some members never do this work",
            "Setting the rate is contested"
          ],
          "bestWhen": "A few members strongly avoid the work and others are willing to take more of it."
        },
        {
          "name": "Members, then locums, then a coverage pool",
          "looks": "Members sign up first. Weeks still open go to locums. If no locum is found by an agreed deadline, the gap is filled from a coverage pool of full members, rotating so everyone takes an equal share of these redeployment weeks.",
          "pros": [
            "Locums are tried before any member is moved",
            "Every week still gets covered",
            "Redeployment is shared equally"
          ],
          "cons": [
            "Depends on locum support and an agreed deadline with the health authority",
            "Redeployment comes at short notice",
            "Only full members carry the coverage pool"
          ],
          "bestWhen": "Locum support is reliable enough to fill most gaps."
        },
        {
          "name": "Funded alternatives",
          "needsChange": "Dedicated funding, a different staffing model or a different kind of provider would change the funding or deliverables in the contract.",
          "looks": "Island Health funds a different staffing model or a different kind of provider for some of the work.",
          "pros": [
            "Can fix the root cause",
            "May lower pressure on physicians"
          ],
          "cons": [
            "Depends on the region and the contract",
            "Slow and uncertain"
          ],
          "bestWhen": "The group believes the model itself is the problem."
        }
      ]
    },
    {
      "id": "hardfill-structure",
      "title": "How the hard-to-fill weeks are built",
      "intro": "A separate question from who covers them: the shape of the week itself. A different shape can make the work easier to take on.",
      "options": [
        {
          "name": "Full week, with call, as now",
          "looks": "One physician takes the whole week, including the call.",
          "pros": [
            "Best continuity for patients and staff",
            "Simple to schedule"
          ],
          "cons": [
            "The heaviest single block of work in the group",
            "Hard to fit around other jobs"
          ],
          "bestWhen": "Continuity matters most."
        },
        {
          "name": "Split weeks",
          "looks": "The week is divided, for example weekdays and weekend, so two physicians each take part.",
          "pros": [
            "Smaller blocks more people can fit in",
            "Less disruption to other work and family life"
          ],
          "cons": [
            "A handover mid-week",
            "Less continuity",
            "More slots to fill"
          ],
          "bestWhen": "The size of the block is what puts people off."
        },
        {
          "name": "Daytime and call covered separately",
          "looks": "One physician does the daytime service. Call is covered by a separate roster, which could be shared with other lines.",
          "pros": [
            "Separates the most disliked part from the clinical week",
            "Call can be spread across more people"
          ],
          "cons": [
            "The physician on call may not know the patients",
            "Needs a clear handover and escalation plan",
            "Must still meet the 24/7 coverage the contract requires"
          ],
          "bestWhen": "Call, rather than the daytime work, is what people avoid."
        }
      ]
    },
    {
      "id": "hardfill-recognition",
      "title": "How hard-to-fill weeks are recognized",
      "intro": "Pick one main form of recognition. The pay options need either new money from Island Health or income shared among members.",
      "options": [
        {
          "name": "No extra recognition",
          "looks": "A hard-to-fill week counts the same as any other week.",
          "pros": [
            "Simple",
            "No tracking, and no money moving between members"
          ],
          "cons": [
            "Does nothing to make the work more attractive",
            "Those who do more of it may feel taken for granted"
          ],
          "bestWhen": "The work is shared evenly enough that recognition is not needed."
        },
        {
          "name": "Extra credit toward the minimum",
          "looks": "Hard-to-fill weeks count extra toward the minimum commitment, so people who do them owe fewer weeks elsewhere.",
          "pros": [
            "Recognizes the burden without money",
            "People choose what suits them",
            "No contract change or pooling"
          ],
          "cons": [
            "Needs agreed weights and tracking",
            "Can be gamed",
            "Only works if there is a minimum commitment"
          ],
          "bestWhen": "Pay cannot be changed but time can."
        },
        {
          "name": "Tiered credit bank",
          "looks": "Hard-to-fill weeks earn credits weighted by difficulty. Up to an annual target they count toward the minimum. Credits above the target can be turned into time off or traded with colleagues.",
          "pros": [
            "Rewards going beyond a fair share",
            "No money or contract change",
            "Flexible for each person"
          ],
          "cons": [
            "The most complex option to design and track",
            "Weights are contested"
          ],
          "bestWhen": "The group wants to reward people who do more than their share, not everyone who does some."
        },
        {
          "name": "Higher hourly rate for hard-to-fill services",
          "looks": "Hours worked on the hardest-to-fill lines are paid at a higher rate than the same hours elsewhere.",
          "pros": [
            "Simple to understand",
            "Directly rewards the work nobody wants",
            "Rewards the time actually worked"
          ],
          "cons": [
            "Contract rates are fixed per FTE, so a higher rate needs either new funding from the region or pooling inside the group",
            "Pooling raises tax and legal questions",
            "Someone has to decide which services qualify"
          ],
          "bestWhen": "The group thinks pay is the main reason these weeks go unfilled."
        },
        {
          "name": "Daily rate from a small association fee",
          "looks": "Each month a small share of everyone’s billed hours goes into a group fund. It is paid out at a daily rate, after the fact, to whoever worked the weeks the group wants to reward, such as withdrawal management or weekends.",
          "pros": [
            "Only a small amount of money moves between members",
            "Targets exactly the work the group wants to encourage",
            "Paid monthly, so the reward comes soon after the work"
          ],
          "cons": [
            "Needs a written agreement and legal and tax advice first",
            "Someone has to run the fund and the payouts each month",
            "The group has to agree which weeks qualify and the rate"
          ],
          "bestWhen": "The burden is the day itself, such as availability and disruption, more than hours worked."
        },
        {
          "name": "First pick of the schedule",
          "looks": "People who do hard-to-fill weeks choose their other weeks, holidays and vacation before everyone else.",
          "pros": [
            "Valuable to people and costs nothing",
            "No contract change or pooling",
            "Easy to explain"
          ],
          "cons": [
            "Only worth as much as the schedule is contested",
            "Others may feel squeezed out of holiday weeks"
          ],
          "bestWhen": "Control over the rest of the year matters more to people than money."
        },
        {
          "name": "Year-end share of a group fund",
          "looks": "A small share of everyone’s income goes into a fund, paid out at year end in proportion to hard-to-fill weeks done.",
          "pros": [
            "A visible reward without changing rates",
            "The group controls the amount"
          ],
          "cons": [
            "Needs pooling, with tax and legal questions to settle first",
            "A delayed reward is less motivating",
            "Reduces everyone else’s income"
          ],
          "bestWhen": "The group is ready to pool and wants a simple annual reward."
        },
        {
          "name": "Escalating bonus for unfilled weeks",
          "looks": "Weeks still open close to the schedule deadline carry a bonus from a group fund that rises until someone takes them.",
          "pros": [
            "Money goes only where it is needed",
            "Finds the price at which people will say yes"
          ],
          "cons": [
            "Needs pooling, with tax and legal questions",
            "Rewards waiting",
            "Can become expensive and unpredictable"
          ],
          "bestWhen": "Only a handful of weeks are hard to fill each year."
        }
      ]
    },
    {
      "id": "callpay-model",
      "title": "What call earns",
      "intro": "Today call earns nothing unless you are called in. Pick one approach.",
      "options": [
        {
          "name": "Nothing extra, but shared evenly",
          "looks": "Call stays unrecognized, but no one takes more than a set share.",
          "pros": [
            "Fair and simple",
            "Protects wellbeing",
            "No credits or money to track"
          ],
          "cons": [
            "Does not recognize burden",
            "Reduces flexibility"
          ],
          "bestWhen": "Fairness matters more than pay."
        },
        {
          "name": "Time instead of money",
          "looks": "Call earns credit toward the minimum commitment or a lighter schedule elsewhere.",
          "pros": [
            "No money needed",
            "Flexible"
          ],
          "cons": [
            "Needs weights and tracking",
            "Not everyone values time over pay"
          ],
          "bestWhen": "Pooling is not possible yet."
        },
        {
          "name": "Protected rest after call",
          "looks": "A week with call is followed by a protected week off service, or call nights earn a later day off.",
          "pros": [
            "Directly offsets the burden of call",
            "No money or contract change"
          ],
          "cons": [
            "Takes people off the schedule, so others cover more",
            "Needs tracking"
          ],
          "bestWhen": "Fatigue, not pay, is the main complaint about call."
        },
        {
          "name": "Internal premium",
          "looks": "Part of a small association fee is paid to whoever takes call, such as weekend phone call for perinatal or withdrawal management.",
          "pros": [
            "Direct and visible"
          ],
          "cons": [
            "Needs pooling",
            "Tax and legal questions",
            "Reduces others’ income"
          ],
          "bestWhen": "The group is ready to pool."
        },
        {
          "name": "Ask for funded call pay (MOCAP)",
          "needsChange": "The contract pays nothing for on-call availability, so MOCAP or any other funded call pay would be a new payment term.",
          "looks": "Apply for MOCAP (the Medical On-Call Availability Program), which pays physicians for being available on call. Requests for this service have not been approved so far.",
          "pros": [
            "New money rather than redistribution",
            "Fixes the root cause"
          ],
          "cons": [
            "Previous requests have not been approved",
            "Needs a case and data",
            "Slow"
          ],
          "bestWhen": "The group has good data and a clear request."
        }
      ]
    },
    {
      "id": "hardfill-redeploy",
      "title": "If someone is moved to a less attractive service",
      "intro": "Sometimes a member is asked to leave a week they chose, to cover a gap somewhere less popular.",
      "options": [
        {
          "name": "No extra recognition",
          "looks": "Moving when asked is part of being in the group.",
          "pros": [
            "Simple",
            "No tracking"
          ],
          "cons": [
            "The same willing people get moved again and again",
            "Makes people reluctant to answer the phone"
          ],
          "bestWhen": "Moves are rare."
        },
        {
          "name": "Moves follow a rotating list",
          "looks": "No extra recognition, but moves go to members in a set order, so no one is moved twice before everyone has been moved once.",
          "pros": [
            "Fair and predictable",
            "No credits or money to track beyond the list"
          ],
          "cons": [
            "The next person on the list may be the least suitable",
            "Does not recognize the disruption"
          ],
          "bestWhen": "The problem is the same people always being asked."
        },
        {
          "name": "Redeployment credit",
          "looks": "A move earns extra credit toward the minimum commitment, or first pick of future weeks.",
          "pros": [
            "Recognizes the person who steps in",
            "No money needed",
            "No contract change or pooling"
          ],
          "cons": [
            "Needs a definition of which moves qualify and who decides",
            "Needs tracking"
          ],
          "bestWhen": "Gaps are usually filled by asking individuals to move."
        },
        {
          "name": "Redeployment bonus",
          "looks": "A one-time payment when a member is asked to move from a more attractive service to a less attractive one to fill a gap.",
          "pros": [
            "Recognizes the person who steps in at short notice",
            "Makes it more acceptable to ask someone to move",
            "Targets the moments when the schedule is most strained"
          ],
          "cons": [
            "Needs a clear definition of which moves qualify and who decides",
            "Needs a source of funds, either the region or a group pool",
            "May encourage people to wait to be asked"
          ],
          "bestWhen": "Gaps are usually filled by asking individuals to move, and the group wants that to feel fair."
        }
      ]
    }
  ],
  "questions": [
    "What makes this work unattractive, and which of those things can we change?",
    "Would people do more of it if it were structured differently?",
    "What burden is call really, in hours, in disruption, in being unable to plan?",
    "Would time or money make the bigger difference?"
  ],
  "watch": [
    "Treating money as the only lever. Support, supervision and predictability matter too.",
    "A plan that works only while a small group stays willing.",
    "Designing an incentive that ends up paying people for what they were already doing.",
    "Not recording on-call work. Time spent dealing with calls is part of the contracted services and can be counted, whatever option the group chooses."
  ],
  "sources": [
    "contractTemplate",
    "scheduling",
    "mgma",
    "callcomp"
  ]
},

{
  "id": "shortage",
  "band": "work",
  "title": "Shortages and capacity limits",
  "icon": "gauge",
  "question": "What do we do when we cannot staff everything, and which lines do we protect first?",
  "why": "Shortages will happen. The agreement can decide ahead of time what counts as one, who is told, what gets reduced first and how everyone shares the load. Without that, each shortage becomes an emergency where the most conscientious people absorb it.",
  "region": "The contract already has a shortage process. The group’s own plan can show the region it is taking responsibility before that process is triggered.",
  "decisions": [
    {
      "id": "coverage-order",
      "title": "When people run short, which lines are protected first?",
      "intro": "The contract gives no order, so any ranking is for the group and the region to agree.",
      "options": [
        {
          "name": "Decide case by case",
          "looks": "The leader or the people on the day decide.",
          "pros": [
            "Flexible",
            "No agreement needed up front"
          ],
          "cons": [
            "Arguments each time",
            "Feels arbitrary",
            "Hard for the region to rely on"
          ],
          "bestWhen": "Shortfalls are rare."
        },
        {
          "name": "Written internal order",
          "looks": "The group agrees and records a ranking and a rule for how to apply it.",
          "pros": [
            "Predictable",
            "Removes personal pressure from decisions"
          ],
          "cons": [
            "May not match what the region expects",
            "Hard to change once people rely on it"
          ],
          "bestWhen": "The group wants a clear rule it controls."
        },
        {
          "name": "Order agreed with the region",
          "looks": "The group and Island Health write down the same order, and the group may agree what the region accepts as a reduced service.",
          "pros": [
            "No surprises in a shortage",
            "Shared accountability",
            "Ties into the contract’s shortage process"
          ],
          "cons": [
            "Takes negotiation",
            "May expose disagreement about priorities"
          ],
          "bestWhen": "Reliability is the main promise to the region."
        }
      ]
    },
    {
      "id": "shortage-plan",
      "title": "How the group responds to a shortage",
      "intro": "Each option builds on the one before.",
      "options": [
        {
          "name": "Informal",
          "looks": "People pitch in and the leader calls the region.",
          "pros": [
            "No process needed",
            "Fast"
          ],
          "cons": [
            "Burden lands on the same people",
            "No record to support a case to the region"
          ],
          "bestWhen": "Shortages are rare and small."
        },
        {
          "name": "Triggers and escalation",
          "looks": "Defined thresholds start defined steps: notify members, call a meeting, contact the region.",
          "pros": [
            "Early warning",
            "Fewer surprises",
            "Builds a record"
          ],
          "cons": [
            "Needs monitoring",
            "Thresholds can be argued over"
          ],
          "bestWhen": "The group wants earlier action."
        },
        {
          "name": "Triggers plus a pre-agreed reduction order",
          "needsChange": "Reducing or pausing services below the contracted minimums would change the contract’s deliverables.",
          "looks": "As above, plus a written list of what gets reduced or paused, in order, ideally agreed with the region.",
          "pros": [
            "Clear and fast",
            "Protects people from heroics",
            "Shared with the region"
          ],
          "cons": [
            "Hard to agree",
            "Reductions can be unwelcome to the region"
          ],
          "bestWhen": "Reliability is the key promise."
        }
      ]
    },
    {
      "id": "shortage-limits",
      "title": "How much extra one person can be asked to carry",
      "intro": "A separate question from the plan: a limit on what any one member takes on during a shortage.",
      "options": [
        {
          "name": "No set limit",
          "looks": "People take on what they are willing to.",
          "pros": [
            "Maximum flexibility in a crisis"
          ],
          "cons": [
            "The most conscientious people carry the most",
            "Burnout risk"
          ],
          "bestWhen": "Shortages are short and rare."
        },
        {
          "name": "A limit that can be exceeded with consent",
          "looks": "A set maximum on extra weeks or back-to-back weeks. A member can agree to go over it, and is recognized when they do.",
          "pros": [
            "Protects people by default",
            "Keeps flexibility for emergencies"
          ],
          "cons": [
            "People may feel pressure to consent",
            "Needs tracking"
          ],
          "bestWhen": "The group wants protection without losing flexibility."
        },
        {
          "name": "A firm limit",
          "looks": "A set maximum that cannot be exceeded, even in a crisis.",
          "pros": [
            "Real protection from burnout",
            "Prevents a hero culture"
          ],
          "cons": [
            "Can leave a line uncovered",
            "May put the contracted minimums at risk"
          ],
          "bestWhen": "Burnout is the most serious risk."
        }
      ]
    }
  ],
  "questions": [
    "What would tell us we have crossed from a bad week into a shortage?",
    "Who is allowed to declare one?",
    "What limit would we put on how much extra any one person can be asked to carry?",
    "If we had to close one line for a day, which would it be and why?"
  ],
  "watch": [
    "A plan that assumes someone will always step in.",
    "Promising the region a service level that the group cannot reliably meet.",
    "Assuming the region’s priorities and the group’s are the same without checking."
  ],
  "sources": [
    "contractTemplate",
    "scheduling"
  ]
},

{
  "id": "leave",
  "band": "work",
  "title": "Leaves and locums",
  "icon": "life-buoy",
  "question": "What happens to the work, and to the person, when someone is away?",
  "why": "Parental, medical, academic and vacation leave are normal, and without a plan, covering them falls to whoever happens to be available. Clear expectations about notice, cover and return make leave less stressful for the person and for their colleagues.",
  "region": "Island Health currently manages locums itself. A group role in finding and orienting locums would be a change worth discussing.",
  "decisions": [
    {
      "id": "leave-notice",
      "title": "Notice and planning",
      "intro": "Parental leave notice is set by the contract. Other leave is up to the group.",
      "options": [
        {
          "name": "Informal",
          "looks": "People let colleagues know when they can.",
          "pros": [
            "Flexible",
            "No bureaucracy"
          ],
          "cons": [
            "Last-minute scrambles",
            "Uneven expectations"
          ],
          "bestWhen": "Leave is rare and the group is small."
        },
        {
          "name": "Standard notice",
          "looks": "A single notice period for any planned leave, with exceptions for emergencies.",
          "pros": [
            "Predictable",
            "Time to plan cover"
          ],
          "cons": [
            "Not always possible",
            "Needs a fair process for exceptions"
          ],
          "bestWhen": "The group wants predictability."
        },
        {
          "name": "Notice scaled to the length of leave",
          "looks": "Short notice for a short absence and longer notice for a long one, for example weeks for a vacation and months for a planned extended leave.",
          "pros": [
            "Matches planning time to the size of the gap",
            "Fair to both short and long leaves"
          ],
          "cons": [
            "More rules to remember",
            "Still needs exceptions for emergencies"
          ],
          "bestWhen": "Leaves vary a lot in length."
        }
      ]
    },
    {
      "id": "leave-cover",
      "title": "How longer absences are covered",
      "intro": "Colleagues will usually step in for a short absence. This is about leaves of more than a few weeks.",
      "options": [
        {
          "name": "Colleagues absorb it",
          "looks": "Everyone takes a share as it comes, without tracking.",
          "pros": [
            "No locum cost",
            "Keeps continuity"
          ],
          "cons": [
            "Long leaves can mean long stretches of extra weeks for colleagues",
            "Without tracking, the extra work can fall unevenly"
          ],
          "bestWhen": "Long absences are rare."
        },
        {
          "name": "Colleagues absorb it, with a reciprocity bank",
          "looks": "Everyone takes a share, and covering earns credit the person can use when they need leave themselves.",
          "pros": [
            "Rewards generosity",
            "Makes the exchange explicit"
          ],
          "cons": [
            "Needs tracking",
            "Still relies on colleagues having spare capacity"
          ],
          "bestWhen": "Fairness over time matters most."
        },
        {
          "name": "Locums arranged in advance",
          "looks": "A locum is arranged ahead through Island Health, with colleagues covering only what the locum cannot.",
          "pros": [
            "Predictable",
            "Protects members from long stretches of extra work"
          ],
          "cons": [
            "Locum supply is limited and costly",
            "Orientation takes time",
            "Island Health approves locums"
          ],
          "bestWhen": "Absences are long and known in advance."
        }
      ]
    },
    {
      "id": "leave-sick",
      "title": "Short-notice absences",
      "intro": "Who finds cover when someone is sick or has an emergency on the day.",
      "options": [
        {
          "name": "The lead finds cover",
          "looks": "The absent physician tells the lead, who finds a replacement.",
          "pros": [
            "The sick person does not have to phone around",
            "One person sees the whole picture"
          ],
          "cons": [
            "Heavy, unpredictable load on the lead",
            "Depends on the lead being reachable"
          ],
          "bestWhen": "The group has a lead with time and support for this."
        },
        {
          "name": "Arrange your own cover, then escalate",
          "looks": "The absent physician first tries to arrange a colleague to cover, with the lead’s help. If no one can, it goes to the lead and then to the health authority’s medical leadership.",
          "pros": [
            "Spreads the work of finding cover",
            "Used in at least one other BC addiction medicine group",
            "Clear escalation path"
          ],
          "cons": [
            "Puts the burden on someone who is unwell or in a crisis",
            "The same willing colleagues get asked every time"
          ],
          "bestWhen": "Absences are rare and colleagues are generally willing."
        },
        {
          "name": "A set backup order",
          "looks": "Cover follows an agreed list, such as the redeployment rotation, so the next person on the list is asked first.",
          "pros": [
            "No one has to phone around",
            "Fair over time",
            "Ties in with redeployment rules"
          ],
          "cons": [
            "Needs a maintained list",
            "The next person may be on vacation or unsuitable"
          ],
          "bestWhen": "Short-notice gaps are frequent enough to need a system."
        }
      ]
    }
  ],
  "questions": [
    "What do we want a person on leave to hear from us, and what do we expect of them?",
    "When is it reasonable to ask colleagues to absorb extra work?",
    "Should we have a say in locum selection?"
  ],
  "watch": [
    "Any language that conflicts with the parental leave article in the contract.",
    "Building a system that only works if nobody is ever away."
  ],
  "sources": [
    "contractTemplate",
    "guide"
  ]
}

);
