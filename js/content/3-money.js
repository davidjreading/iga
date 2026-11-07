window.PILLARS.push(

{
  "id": "structure",
  "band": "money",
  "title": "Pooling income",
  "icon": "landmark",
  "question": "Should we share any of our income, and if so, how much and how?",
  "why": "Under the contract each physician is an independent contractor, so the group’s structure is already set. Each physician invoices separately and Island Health pays the contract rate. The open question is whether members pool part of that income, for example through a small association fee, to pay for things the contract does not fund: recognition for hard-to-fill weeks or call, paid leadership roles, or legal and accounting costs. Any pooling needs legal and tax advice first.",
  "region": "Island Health pays the contract rate and does not mind how money is divided among members, provided invoices and hours reports are accurate and on time.",
  "decisions": [
    {
      "id": "funding-path",
      "title": "How much income is shared",
      "intro": "The options run from no sharing to full sharing. Treat all of them as questions for a lawyer and an accountant, not recommendations.",
      "options": [
        {
          "name": "Each physician invoices independently",
          "looks": "The current approach.",
          "pros": [
            "Simple",
            "Clear individual income",
            "No group handling of money"
          ],
          "cons": [
            "No way to share or redistribute",
            "Any incentive has to come from the funder"
          ],
          "bestWhen": "People want to keep money separate."
        },
        {
          "name": "A Representative invoices and pays by hours",
          "looks": "One person invoices for the group and passes on to each member exactly what they earned. Nothing is shared.",
          "pros": [
            "Less admin for members",
            "One set of invoices for the region"
          ],
          "cons": [
            "Admin and liability for the Representative",
            "Looks closer to pooling",
            "Needs a clear mandate"
          ],
          "bestWhen": "The group wants simpler admin without changing who gets what."
        },
        {
          "name": "Partial pooling: a small group fund",
          "looks": "Members still receive most of what they earn, but a small agreed share goes into a group fund that pays for call, cover or extras.",
          "pros": [
            "Limited change to income",
            "Targets a specific problem"
          ],
          "cons": [
            "Still needs a holder for the fund",
            "Contributions must be agreed and enforced"
          ],
          "bestWhen": "The group wants to try pooling in a small way first."
        },
        {
          "name": "Full pooling by formula",
          "looks": "Funds are pooled and distributed by an agreed formula that can weigh hard-to-fill weeks, call or other contributions.",
          "pros": [
            "Lets the group build its own incentives",
            "Spreads risk"
          ],
          "cons": [
            "Likely needs a legal entity",
            "Tax and partnership questions",
            "The formula is contested"
          ],
          "bestWhen": "The group wants to redistribute and has taken advice."
        }
      ]
    }
  ],
  "questions": [
    "What would we want to pay for that the contract does not fund?",
    "How much of our income would we be willing to pool, if any?",
    "Who would we trust to hold and pay out group money, and how would we check it?",
    "How would we explain the arrangement to a new member before they join?"
  ],
  "watch": [
    "Allocating funds in a way that unintentionally looks like a partnership. The Doctors of BC guide notes that how a group allocates payments can affect whether the CRA treats it as a partnership or an association.",
    "Informal pooling without advice. It can create tax consequences nobody expected.",
    "A fund with no clear rules on who holds it, how it is paid out and how members can see the accounts."
  ],
  "sources": [
    "guide",
    "template",
    "contractTemplate",
    "mgma"
  ]
},

{
  "id": "differentials",
  "band": "money",
  "title": "Pay differences by training",
  "icon": "scale",
  "question": "Should specialists and family physicians be paid the same or differently?",
  "why": "The contract already sets different rates by credential, and the one for addiction medicine credentials is fixed. The open question is whether the group adds, evens out or leaves that as it is. The answer affects recruitment, fairness and morale.",
  "region": "Another health authority’s contract pays a flat rate regardless of training. Another BC group’s draft agreement pays by service instead, with withdrawal management as its own category, evening and weekend premiums, and locums paid the same as members. Here the contract is not expected to change, so its rates apply for the full term.",
  "decisions": [
    {
      "id": "diff-approach",
      "title": "What to do about it",
      "intro": "Members have different views, and the one that matters most may be what helps recruit.",
      "options": [
        {
          "name": "Keep the contract rates",
          "looks": "Each person is paid as the contract says.",
          "pros": [
            "Simple",
            "No internal transfers",
            "Supports specialist recruitment"
          ],
          "cons": [
            "Some may see it as unfair",
            "May cause tension if workloads are equal"
          ],
          "bestWhen": "Most people accept the difference."
        },
        {
          "name": "Equalize inside the group",
          "looks": "Members sign an agreement to redistribute part of their income among themselves, so that everyone ends up paid the same for the same work. The contract rates stay as they are.",
          "pros": [
            "Equal pay for equal work",
            "Eases resentment",
            "Does not need the contract to change, since the contract leaves how money is divided inside the group to the group"
          ],
          "cons": [
            "Needs a written agreement among members to redistribute income, with tax and legal questions to settle first",
            "May hurt specialist recruitment",
            "Hard to maintain as people join or leave"
          ],
          "bestWhen": "The group strongly values equal pay."
        },
        {
          "name": "Pay by service instead of training",
          "looks": "Members agree to redistribute income so that pay varies by service, for example a higher rate for withdrawal management and evenings or weekends, rather than by training.",
          "pros": [
            "Rewards the hardest work directly",
            "Treats specialists and family physicians the same for the same work",
            "Used in another BC health authority group’s draft agreement"
          ],
          "cons": [
            "Needs a written income agreement, with tax and legal questions to settle first",
            "May hurt specialist recruitment",
            "Overlaps with how hard-to-fill weeks are recognized"
          ],
          "bestWhen": "The group cares more about which work is done than who does it."
        },
        {
          "name": "Ask the funder for a single rate",
          "needsChange": "The rates by credential and practice category are set in the contract, so a single rate would mean changing them.",
          "looks": "Open a conversation with the region about a flat rate for the same work.",
          "pros": [
            "Fixes it at the source",
            "No internal redistribution"
          ],
          "cons": [
            "Uncertain and slow",
            "Could lower the specialist rate instead of raising the other"
          ],
          "bestWhen": "The group wants the contract to match its values."
        }
      ]
    }
  ],
  "questions": [
    "Is the difference tied to the work, to training or to recruitment?",
    "What would it take for us to feel the pay is fair?",
    "Do we want to decide this ourselves or ask the region?"
  ],
  "watch": [
    "Treating this as a single yes-or-no. Fairness and recruitment pull in different directions.",
    "Making a change that undoes the recruitment benefit some members value."
  ],
  "sources": [
    "contractTemplate",
    "mgma"
  ]
}

);
