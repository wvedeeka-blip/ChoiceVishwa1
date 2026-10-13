const engineeringDetails = {
  field: 'Engineering admissions in Maharashtra',
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
}

const pharmacyDetails = {
  field: 'Pharmacy admissions',
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
}

const architectureDetails = {
  field: 'Architecture admissions',
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
}

const mbaDetails = {
  field: 'Management admissions',
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
}

const josaaDetails = {
  field: 'National engineering admissions',
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
}

// Each service's pricing array determines how many plan cards are shown.
const counsellingServices = [
  {
    id: 'be-counselling',
    name: 'BE Counselling',
    title: 'BE Counselling',
    ...engineeringDetails,
    pricing: [
      {
        category: 'END-TO-END GUIDANCE',
        title: 'Get Full Admission Guidance',
        price: '₹1,999',
        originalPrice: '₹3,999',
        discount: '50% OFF',
        description: 'Comprehensive expert-led guidance for students and parents who want to secure the absolute best college seat.',
        features: [
          'Everything in the College List plan',
          'One-to-one interaction',
          'Counselling session with parents',
          'Custom strategy and advice',
          'Freeze and betterment guidance',
          'Ongoing support',
          'Special college analysis',
        ],
        buttonText: 'Get Full Guidance',
        recommended: true,
        link: '#',
      },
      {
        category: 'OPTION FORM ONLY',
        title: 'Unlock Your Personalized College List',
        price: '₹999',
        originalPrice: '₹1,999',
        discount: '50% OFF',
        description: 'Perfect for students who need a high-accuracy, personalized option form list reviewed by experts.',
        features: [
          'One 1:1 session with experts',
          'Up to 3 branches and 5 locations',
          'Category-wise cutoff analysis',
          'Expert-reviewed college list',
          'Detailed, easy-to-understand options',
          'Clear indicators for every college',
        ],
        buttonText: 'Unlock My College List',
        recommended: false,
        link: '#',
      },
    ],
  },
  {
    id: 'be-list',
    name: 'BE List',
    title: 'BE List',
    ...engineeringDetails,
    pricing: [
      {
        title: 'College Preference List',
        price: '₹499',
        description: 'A focused college and branch preference list to help students make better choices.',
        features: [
          'College options based on rank',
          'Branch preference guidance',
          'Personalized preference list',
          'Basic choice-filling guidance',
        ],
        link: '#',
      },
    ],
  },
  {
    id: 'dse-be-counselling',
    name: 'DSE BE Counselling',
    title: 'DSE BE Counselling',
    ...engineeringDetails,
    pricing: [
      {
        title: 'Basic Guidance',
        price: '₹999',
        description: 'Guidance for navigating the DSE counselling process.',
        features: [
          'DSE counselling process guidance',
          'College and branch options',
          'Preference support',
          'Admission process guidance',
        ],
        link: '#',
      },
      {
        title: 'End-to-End Guidance',
        price: '₹1,999',
        description: 'Complete support throughout the DSE counselling journey.',
        features: [
          'Everything in Basic Guidance',
          'Personalized college preference strategy',
          'Choice filling guidance',
          'Document guidance',
          'Counselling-stage support',
        ],
        link: '#',
      },
    ],
  },
  {
    id: 'dse-list',
    name: 'DSE List',
    title: 'DSE List',
    ...engineeringDetails,
    searchTerms: ['BE'],
    pricing: [
      {
        title: 'DSE College Preference List',
        price: '₹499',
        description: 'A focused preference list for DSE college and branch selection.',
        features: [
          'College options',
          'Branch preference',
          'Personalized list',
          'Choice-filling guidance',
        ],
        link: '#',
      },
    ],
  },
  {
    id: 'josaa-counselling',
    name: 'JOSAA Counselling',
    title: 'JOSAA Counselling',
    ...josaaDetails,
    pricing: [
      {
        title: 'JOSAA Guidance',
        price: '₹999',
        description: 'Guidance for navigating the JOSAA counselling and seat allocation process.',
        features: [
          'JOSAA counselling process',
          'College and branch options',
          'Preference guidance',
          'Choice filling support',
          'Seat allocation guidance',
        ],
        link: '#',
      },
    ],
  },
  {
    id: 'b-pharm-counselling',
    name: 'B Pharm Counselling',
    title: 'B Pharm Counselling',
    ...pharmacyDetails,
    pricing: [
      {
        title: 'B.Pharm Counselling Guidance',
        price: '₹799',
        description: 'Guidance for pharmacy counselling and admission decisions.',
        features: [
          'Counselling process guidance',
          'College options',
          'Preference support',
          'Admission guidance',
        ],
        link: '#',
      },
    ],
  },
  {
    id: 'mba-cet-counselling',
    name: 'MBA CET Counselling',
    title: 'MBA CET Counselling',
    ...mbaDetails,
    pricing: [
      {
        title: 'MBA CET Guidance',
        price: '₹999',
        description: 'Guidance for navigating MBA CET counselling and college selection.',
        features: [
          'Counselling process guidance',
          'College options',
          'Preference strategy',
          'Choice filling support',
          'Admission guidance',
        ],
        link: '#',
      },
    ],
  },
  {
    id: 'b-arch-counselling',
    name: 'B Arch Counselling',
    title: 'B Arch Counselling',
    ...architectureDetails,
    pricing: [
      {
        title: 'B.Arch Counselling Guidance',
        price: '₹799',
        description: 'Guidance for architecture counselling and admission decisions.',
        features: [
          'Counselling process guidance',
          'College options',
          'Preference support',
          'Admission guidance',
        ],
        link: '#',
      },
    ],
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

async function playBrandIntro() {
  const intro = document.querySelector('#brand-intro')
  const brandImage = document.querySelector('.brand img')
  if (!intro || !brandImage) return

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    intro.remove()
    return
  }

  await brandImage.decode()
  const canvas = document.createElement('canvas')
  canvas.width = brandImage.naturalWidth
  canvas.height = brandImage.naturalHeight
  const context = canvas.getContext('2d', { willReadFrequently: true })
  if (!context) throw new Error('Could not create the logo animation canvas.')
  context.drawImage(brandImage, 0, 0)
  const originalPixels = context.getImageData(0, 0, canvas.width, canvas.height)
  const basePixels = context.createImageData(canvas.width, canvas.height)
  const tickPixels = context.createImageData(canvas.width, canvas.height)

  for (let pixel = 0; pixel < originalPixels.data.length; pixel += 4) {
    const red = originalPixels.data[pixel]
    const green = originalPixels.data[pixel + 1]
    const blue = originalPixels.data[pixel + 2]
    const isGreenTick = green - red > 8 && green - blue > 8

    if (isGreenTick) {
      basePixels.data[pixel] = 255
      basePixels.data[pixel + 1] = 255
      basePixels.data[pixel + 2] = 255
      basePixels.data[pixel + 3] = 255
      tickPixels.data.set(originalPixels.data.subarray(pixel, pixel + 4), pixel)
    } else {
      basePixels.data.set(originalPixels.data.subarray(pixel, pixel + 4), pixel)
    }
  }

  context.putImageData(basePixels, 0, 0)
  const baseLogo = canvas.toDataURL('image/png')
  context.putImageData(tickPixels, 0, 0)
  const tickLogo = canvas.toDataURL('image/png')

  const logo = document.createElement('div')
  logo.className = 'brand-intro-logo'
  logo.innerHTML = `
    <img src="${baseLogo}" alt="" />
    <img class="brand-intro-tick" src="${tickLogo}" alt="" />
  `
  intro.appendChild(logo)
  brandImage.classList.add('intro-hidden')

  const startWidth = Math.min(520, window.innerWidth * 0.84)
  const startX = window.innerWidth / 2
  const startY = window.innerHeight / 2
  logo.style.width = `${startWidth}px`
  logo.style.left = `${startX}px`
  logo.style.top = `${startY}px`

  await new Promise((resolve) => window.setTimeout(resolve, 250))
  const tick = logo.querySelector('.brand-intro-tick')
  await tick.animate(
    [
      { clipPath: 'inset(0 100% 0 0)' },
      { clipPath: 'inset(0 0 0 0)' },
    ],
    { duration: 1500, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', fill: 'forwards' },
  ).finished

  const target = brandImage.getBoundingClientRect()
  const targetX = target.left + target.width / 2
  const targetY = target.top + target.height / 2
  const middleX = startX + (targetX - startX) * 0.72
  const middleY = startY + (targetY - startY) * 0.42

  intro.classList.add('is-returning')
  await logo.animate(
    [
      { left: `${startX}px`, top: `${startY}px`, width: `${startWidth}px` },
      { left: `${middleX}px`, top: `${middleY}px`, width: `${startWidth * 0.55}px`, offset: 0.68 },
      { left: `${targetX}px`, top: `${targetY}px`, width: `${target.width}px` },
    ],
    { duration: 1350, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' },
  ).finished

  intro.remove()
  brandImage.classList.remove('intro-hidden')
}

const serviceOptions = document.querySelector('#service-options')
const journeyTimeline = document.querySelector('#journey-timeline')
const benefitGrid = document.querySelector('#benefit-grid')
const processList = document.querySelector('#process-list')
const serviceTitle = document.querySelector('#service-detail-title')
const serviceDescription = document.querySelector('#service-description')
const supportPlans = document.querySelector('#support-plans')
const supportPlansLabel = document.querySelector('#support-plans-label')
const supportPlanGrid = supportPlans?.querySelector('.support-plan-grid')
const serviceSearchInput = document.querySelector('#service-search-input')
const serviceSearchEmpty = document.querySelector('#service-search-empty')
const comparePlansButton = document.querySelector('#compare-plans-button')
const comparisonModalElement = document.querySelector('#plan-comparison-modal')
let activeServiceId = 'be-counselling'

// Draw the service buttons from the data above.
function showServiceOptions() {
  counsellingServices.forEach((service) => {
    const button = document.createElement('button')
    button.type = 'button'
    button.className = `service-option${service.id === 'be-counselling' ? ' priority' : ''}`
    button.dataset.serviceId = service.id
    button.setAttribute('aria-pressed', 'false')
    button.setAttribute('aria-controls', 'mht-cet-journey')
    button.innerHTML = `
      <span class="option-icon"><i class="bi ${service.id === 'be-counselling' ? 'bi-buildings' : 'bi-mortarboard'}" aria-hidden="true"></i></span>
      <span class="option-copy"><strong>${service.name}</strong><small>${service.field}</small></span>
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
  benefitGrid.innerHTML = benefits.map(([icon, title, description]) => `
    <article class="benefit-card">
      <span class="benefit-icon"><i class="bi ${icon}" aria-hidden="true"></i></span>
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

function filterServices(query) {
  const searchTerm = query.trim().toLowerCase()
  let visibleServices = 0

  document.querySelectorAll('.service-option').forEach((button) => {
    const service = counsellingServices.find((item) => item.id === button.dataset.serviceId)
    const searchableText = `${service.name} ${service.field} ${service.searchTerms?.join(' ') ?? ''}`.toLowerCase()
    const matches = searchableText.includes(searchTerm)
    button.hidden = !matches
    if (matches) visibleServices += 1
  })

  serviceSearchEmpty.hidden = visibleServices > 0
}

function getPlanFeatures(plan, plans, index) {
  const features = new Set(plan.features)

  plan.features.forEach((feature) => {
    const inheritedTitle = feature.match(/^Everything in (.+)$/)?.[1]
    const inheritedPlan = plans.slice(0, index).find((item) => item.title === inheritedTitle)
    inheritedPlan?.features.forEach((inheritedFeature) => features.add(inheritedFeature))
  })

  return features
}

function renderComparison(service) {
  const tableHead = comparisonModalElement.querySelector('thead')
  const tableBody = comparisonModalElement.querySelector('tbody')
  const planFeatures = service.pricing.map((plan, index) => getPlanFeatures(plan, service.pricing, index))
  const allFeatures = [...new Set(planFeatures.flatMap((features) => [...features]))]

  comparisonModalElement.querySelector('.modal-title').textContent = `${service.name} Plan Comparison`
  tableHead.replaceChildren()
  tableBody.replaceChildren()

  const headerRow = document.createElement('tr')
  const featureHeading = document.createElement('th')
  featureHeading.scope = 'col'
  featureHeading.textContent = 'Feature'
  headerRow.appendChild(featureHeading)
  service.pricing.forEach((plan) => {
    const heading = document.createElement('th')
    heading.scope = 'col'
    heading.textContent = `${plan.title} (${plan.price})`
    headerRow.appendChild(heading)
  })
  tableHead.appendChild(headerRow)

  allFeatures.forEach((feature) => {
    const row = document.createElement('tr')
    const featureCell = document.createElement('th')
    featureCell.scope = 'row'
    featureCell.textContent = feature
    row.appendChild(featureCell)

    planFeatures.forEach((features) => {
      const cell = document.createElement('td')
      const included = features.has(feature)
      cell.textContent = included ? 'Included' : 'Not included'
      cell.setAttribute('aria-label', included ? 'Included' : 'Not included')
      row.appendChild(cell)
    })
    tableBody.appendChild(row)
  })
}

function renderSupportPlans(service) {
  supportPlanGrid.replaceChildren()
  supportPlanGrid.classList.toggle('single-plan', service.pricing.length === 1)
  supportPlans.hidden = service.pricing.length === 0
  supportPlansLabel.textContent = service.name
  comparePlansButton.hidden = service.pricing.length < 2

  service.pricing.forEach((plan, index) => {
    const isFeatured = plan.recommended ?? (service.pricing.length === 2 && index === 1)
    const card = document.createElement('article')
    card.className = `support-plan${isFeatured ? ' featured' : ''}`

    if (isFeatured) {
      const badge = document.createElement('span')
      badge.className = 'plan-badge'
      badge.textContent = 'Most Students Choose This'
      card.appendChild(badge)
    }

    const heading = document.createElement('div')
    heading.className = 'support-plan-heading'
    if (plan.category) {
      const category = document.createElement('p')
      category.className = 'plan-category'
      category.textContent = plan.category
      heading.appendChild(category)
    }
    const title = document.createElement('h3')
    title.textContent = plan.title
    const description = document.createElement('p')
    description.textContent = plan.description
    heading.append(title, description)

    const price = document.createElement('div')
    price.className = 'support-plan-price'
    const amount = document.createElement('strong')
    amount.textContent = plan.price
    price.appendChild(amount)
    if (plan.originalPrice) {
      const originalPrice = document.createElement('span')
      originalPrice.className = 'old-price'
      originalPrice.textContent = plan.originalPrice
      price.appendChild(originalPrice)
    }
    if (plan.discount) {
      const discount = document.createElement('span')
      discount.className = 'discount-badge'
      discount.textContent = plan.discount
      price.appendChild(discount)
    }

    const features = document.createElement('ul')
    features.className = 'support-plan-features'
    plan.features.forEach((feature) => {
      const item = document.createElement('li')
      const icon = document.createElement('i')
      icon.className = 'bi bi-check-circle-fill'
      icon.setAttribute('aria-hidden', 'true')
      item.append(icon, document.createTextNode(feature))
      features.appendChild(item)
    })

    const link = document.createElement('a')
    link.className = `support-plan-button${isFeatured ? ' primary' : ''}`
    link.href = plan.link
    link.dataset.inertLink = ''
    link.addEventListener('click', (event) => event.preventDefault())
    link.append(document.createTextNode(plan.buttonText ?? plan.title))
    const arrow = document.createElement('i')
    arrow.className = 'bi bi-arrow-right'
    arrow.setAttribute('aria-hidden', 'true')
    link.appendChild(arrow)

    card.append(heading, price, features, link)
    supportPlanGrid.appendChild(card)
  })
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
  serviceDescription.textContent = service.pricing[0]?.description ?? ''
  showJourney(service.stages)
  showBenefits(service.benefits.length ? service.benefits : generalBenefits)
  showProcess(service.howItWorks.length ? service.howItWorks : generalHowItWorks)
  renderSupportPlans(service)
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
    selectService('be-counselling')
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
  playBrandIntro()
  showServiceOptions()
  selectService(activeServiceId)
  serviceSearchInput.addEventListener('input', () => filterServices(serviceSearchInput.value))
  comparePlansButton.addEventListener('click', () => {
    if (!window.bootstrap?.Modal) {
      console.error('Bootstrap Modal is unavailable; plan comparison cannot be opened.')
      return
    }

    const service = counsellingServices.find((item) => item.id === activeServiceId)
    if (!service || service.pricing.length < 2) return
    renderComparison(service)
    window.bootstrap.Modal.getOrCreateInstance(comparisonModalElement).show()
  })
}
