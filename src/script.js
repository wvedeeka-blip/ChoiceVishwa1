// The information for each counselling path.
const counsellingServices = [
  {
    id: 'mht-cet',
    name: 'MHT-CET',
    title: 'MHT-CET Counselling',
    field: 'Engineering admissions in Maharashtra',
    description: 'Get one-to-one support for the Maharashtra CAP process, from checking eligibility to completing your admission.',
    stages: [
      ['MHT-CET result', 'Start with your score, percentile, category, and preferred course.'],
      ['Understand eligibility', 'Check CAP eligibility, documents, and important dates.'],
      ['College & branch', 'Compare realistic colleges and engineering branches.'],
      ['Choice filling', 'Build and review an ordered, thoughtful preference list.'],
      ['CAP process', 'Follow each counselling round and its required actions.'],
      ['Seat allotment', 'Understand your allotment and the options available next.'],
      ['Admission', 'Complete reporting, document, and admission steps on time.'],
    ],
    benefits: [
      ['bi-person-check', 'Personalized recommendations', 'A college shortlist shaped around your score, category, preferences, and goals.'],
      ['bi-bar-chart-line', 'Cut-off context', 'Use previous cut-offs as guidance while keeping your options balanced.'],
      ['bi-diagram-3', 'College & branch selection', 'Compare courses and colleges with a clearer view of your priorities.'],
      ['bi-list-check', 'Choice-filling support', 'Review the order of your preferences before you submit them.'],
      ['bi-calendar2-check', 'CAP round guidance', 'Know what each round means and which deadlines need your attention.'],
      ['bi-mortarboard', 'Admission process support', 'Move from allotment to reporting with a practical next-step checklist.'],
    ],
    howItWorks: [
      ['Choose your path', 'Select MHT-CET and tell us where you are in the process.'],
      ['Share your details', 'Bring your score, preferences, and questions to the conversation.'],
      ['Get personal guidance', 'Review options and a college strategy with an expert.'],
      ['Make informed choices', 'Prepare and check your preference list together.'],
      ['Complete admission', 'Get support as you move through allotment and reporting.'],
    ],
  },
  {
    id: 'b-pharm',
    name: 'B.Pharm',
    title: 'B.Pharm Counselling',
    field: 'Pharmacy admissions',
    description: 'Get guidance on pharmacy admission options, eligibility, college preferences, counselling rounds, and the steps to complete your admission.',
    stages: [
      ['Entrance result', 'Gather your score, category, and course preferences.'],
      ['Eligibility check', 'Understand the current admission criteria and documents.'],
      ['Explore colleges', 'Compare pharmacy colleges and available programs.'],
      ['Preference form', 'Organize college choices around your priorities.'],
      ['Counselling rounds', 'Keep track of the process, dates, and next actions.'],
      ['Seat allotment', 'Review your allotment and available options.'],
      ['Admission', 'Prepare for reporting and complete the required steps.'],
    ],
    benefits: [],
    howItWorks: [],
  },
  {
    id: 'b-arch',
    name: 'B.Arch',
    title: 'B.Arch Counselling',
    field: 'Architecture admissions',
    description: 'Explore architecture college options, review admission requirements, and plan your preferences and next steps through counselling.',
    stages: [
      ['Entrance result', 'Bring your score, rank, and preferred study locations.'],
      ['Eligibility check', 'Review the current admission requirements and documents.'],
      ['Explore colleges', 'Compare architecture programs and college options.'],
      ['Preference form', 'Arrange your choices around your goals and priorities.'],
      ['Counselling rounds', 'Understand the process, key dates, and required actions.'],
      ['Seat allotment', 'Review your result and decide what to do next.'],
      ['Admission', 'Plan the reporting and admission requirements.'],
    ],
    benefits: [],
    howItWorks: [],
  },
  {
    id: 'mba',
    name: 'MBA',
    title: 'MBA Counselling',
    field: 'Management admissions',
    description: 'Compare MBA admission options based on your entrance exam, preferred specializations, institute choices, and counselling requirements.',
    stages: [
      ['Entrance result', 'Bring your score, rank, and preferred specializations.'],
      ['Eligibility check', 'Understand the current admission requirements.'],
      ['Compare institutes', 'Explore programs that fit your goals and preferences.'],
      ['Preference form', 'Build a considered order of institute choices.'],
      ['Counselling rounds', 'Track key dates, rounds, and required actions.'],
      ['Seat offer', 'Review your offer and understand the response options.'],
      ['Admission', 'Prepare for verification, reporting, and enrollment.'],
    ],
    benefits: [],
    howItWorks: [],
  },
  {
    id: 'josaa-jee',
    name: 'JoSAA / JEE',
    title: 'JoSAA / JEE Counselling',
    field: 'National engineering admissions',
    description: 'Get help understanding JEE-based institute choices, preference filling, seat-allocation rounds, and the next steps for an allotted seat.',
    stages: [
      ['JEE result', 'Start with your rank, category, and course interests.'],
      ['Eligibility check', 'Review the counselling rules and requirements.'],
      ['Explore institutes', 'Compare institutes and programs using your priorities.'],
      ['Choice filling', 'Prepare and review your JoSAA preference order.'],
      ['Allocation rounds', 'Follow round results, deadlines, and next actions.'],
      ['Seat acceptance', 'Understand the response options for an allotted seat.'],
      ['Reporting', 'Complete verification and institute reporting steps.'],
    ],
    benefits: [],
    howItWorks: [],
  },
]

const generalBenefits = [
  ['bi-person-check', 'Personalized guidance', 'Get advice shaped around your results, eligibility, preferences, and goals.'],
  ['bi-clipboard-check', 'Eligibility & documents', 'Understand the requirements and documents relevant to your admission path.'],
  ['bi-buildings', 'Compare your options', 'Review colleges and programs against the priorities that matter to you.'],
  ['bi-list-check', 'Choice planning', 'Organize your preferences into a clear, considered plan.'],
  ['bi-calendar2-check', 'Round & deadline support', 'Keep track of important dates, rounds, and actions along the way.'],
  ['bi-mortarboard', 'Admission next steps', 'Know what to prepare as you move from selection toward admission.'],
]

const generalHowItWorks = [
  ['Choose your pathway', 'Tell us which course or counselling process you are following.'],
  ['Share your details', 'Bring your results, qualifications, preferences, and questions.'],
  ['Review your options', 'Discuss eligibility, colleges or programs, and the steps ahead.'],
  ['Plan your choices', 'Put your priorities into a practical preference strategy.'],
  ['Move through admission', 'Track key dates and rounds, then prepare for your next step.'],
]

const serviceOptions = document.querySelector('#service-options')
const journeyTimeline = document.querySelector('#journey-timeline')
const benefitGrid = document.querySelector('#benefit-grid')
const processList = document.querySelector('#process-list')
const serviceTitle = document.querySelector('#service-detail-title')
const serviceDescription = document.querySelector('#service-description')
const counsellorLink = document.querySelector('#counsellor-link')
const supportPlans = document.querySelector('#support-plans')
let activeServiceId = 'mht-cet'

// Draw the five service buttons from the data above.
function showServiceOptions() {
  counsellingServices.forEach((service) => {
    const button = document.createElement('button')
    button.type = 'button'
    button.className = `service-option${service.id === 'mht-cet' ? ' priority' : ''}`
    button.dataset.serviceId = service.id
    button.setAttribute('aria-pressed', 'false')
    button.setAttribute('aria-controls', 'mht-cet-journey')
    button.innerHTML = `
      <span class="option-icon"><i class="bi ${service.id === 'mht-cet' ? 'bi-buildings' : 'bi-mortarboard'}" aria-hidden="true"></i></span>
      <span class="option-copy"><strong>${service.name}</strong><small>${service.id === 'mht-cet' ? 'Maharashtra CAP' : service.field}</small></span>
      <span class="option-status live">Open</span>
    `
    button.addEventListener('click', () => selectService(service.id))
    serviceOptions.appendChild(button)
  })
}

function showJourney(stages) {
  journeyTimeline.innerHTML = stages.map(([title, description], index) => `
    <li class="journey-step">
      <span class="journey-number">${String(index + 1).padStart(2, '0')}</span>
      <div><h3>${title}</h3><p>${description}</p></div>
    </li>
  `).join('')
}

function showBenefits(benefits) {
  benefitGrid.innerHTML = benefits.map(([icon, title, description], index) => `
    <article class="benefit-card">
      <span class="benefit-icon"><i class="bi ${icon}" aria-hidden="true"></i></span>
      <span class="benefit-index">0${index + 1}</span>
      <h3>${title}</h3>
      <p>${description}</p>
    </article>
  `).join('')
}

function showProcess(steps) {
  processList.innerHTML = steps.map(([title, description], index) => `
    <li class="process-step">
      <span class="process-number">${String(index + 1).padStart(2, '0')}</span>
      <div><h3>${title}</h3><p>${description}</p></div>
    </li>
  `).join('')
}

// Update the page details when a visitor chooses a different service.
function selectService(serviceId) {
  const service = counsellingServices.find((item) => item.id === serviceId)
  if (!service) return

  activeServiceId = service.id
  document.querySelectorAll('.service-option').forEach((button) => {
    const isSelected = button.dataset.serviceId === activeServiceId
    button.classList.toggle('selected', isSelected)
    button.setAttribute('aria-pressed', String(isSelected))
  })

  serviceTitle.textContent = service.title
  serviceDescription.textContent = service.description
  counsellorLink.href = `mailto:support@choicevishwa.com?subject=Counselling%20support%20-%20${encodeURIComponent(service.title)}`
  showJourney(service.stages)
  showBenefits(service.benefits.length ? service.benefits : generalBenefits)
  showProcess(service.howItWorks.length ? service.howItWorks : generalHowItWorks)
  supportPlans.hidden = service.id !== 'mht-cet'
}

// Keep the phone navigation menu open/close behavior.
const menuToggle = document.querySelector('.menu-toggle')
const navMenu = document.querySelector('.nav-menu')

menuToggle.addEventListener('click', () => {
  const menuIsOpen = menuToggle.getAttribute('aria-expanded') === 'true'
  menuToggle.setAttribute('aria-expanded', String(!menuIsOpen))
  menuToggle.setAttribute('aria-label', menuIsOpen ? 'Open navigation' : 'Close navigation')
  menuToggle.classList.toggle('is-open', !menuIsOpen)
  navMenu.classList.toggle('is-open', !menuIsOpen)
})

document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (['CAP-Info', 'College Predictor'].includes(link.textContent.trim())) {
      event.preventDefault()
    }
    menuToggle.setAttribute('aria-expanded', 'false')
    menuToggle.setAttribute('aria-label', 'Open navigation')
    menuToggle.classList.remove('is-open')
    navMenu.classList.remove('is-open')
  })
})

const mhtCetLink = document.querySelector('#mht-cet-link')
if (mhtCetLink) {
  mhtCetLink.addEventListener('click', (event) => {
    event.preventDefault()
    selectService('mht-cet')
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    const targetTop = document.querySelector('#mht-cet-journey').getBoundingClientRect().top + window.scrollY - 96
    window.scrollTo({ top: targetTop, behavior })
  })
}

// Show the scroll-to-top button only after the page is scrolled down.
const scrollToTopButton = document.querySelector('.scroll-to-top')
window.addEventListener('scroll', () => {
  scrollToTopButton.classList.toggle('show', window.scrollY > 300)
}, { passive: true })
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

document.querySelectorAll('[data-inert-link]').forEach((link) => {
  link.addEventListener('click', (event) => event.preventDefault())
})

if (serviceOptions) {
  showServiceOptions()
  selectService(activeServiceId)
}
