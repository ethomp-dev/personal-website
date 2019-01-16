const projectImageBaseUrl = '/static/img/projects/'
const caseStudyBaseUrl = '/static/markdown/projects/'
export const PROJECTS = [
    {
        id: 'frog',
        brand: 'frog',
        hex: '#5AD09B',
        title: 'FROG Branding and Website',
        titleAlt: 'The Princess and the FROG',
        description: 'Redesigning the brand and web presence of an experienced software company',
        imageUrl: projectImageBaseUrl + 'frog_home-laptop.png',
        imagePlaceholder: 'Homepage of the FROG website on a laptop',
        caseStudy: caseStudyBaseUrl + 'frog.md',
        buttonText: 'View Website',
        buttonLink: 'https://www.furnguy.com'
    }, {
        id: 'tasklog',
        brand: 'tasklog',
        hex: '#209CEF',
        title: 'Tasklog',
        titleAlt: 'Tasklog',
        description: 'Developing a multimodal system for complex task management',
        imageUrl: projectImageBaseUrl + 'tasklog_today-laptop.png',
        imagePlaceholder: 'placeholder',
        caseStudy: caseStudyBaseUrl + 'tasklog.md',
        buttonText: 'View Prototype',
        buttonLink: 'https://tasklog.now.sh'
    },
    // {
    //     id: 'hci',
    //     brand: 'hci',
    //     hex: '#4BA173',
    //     title: 'HCI Project',
    //     titleAlt: 'HCI Project',
    //     description: 'Designing one unified application for navigating all of UNC Charlotte',
    //     imageUrl: projectImageBaseUrl + 'hci_mockups-watch.png',
    //     imagePlaceholder: 'placeholder',
    //     caseStudy: caseStudyBaseUrl + '',
    //     buttonText: '',
    //     buttonLink: ''
    // }
    {
        id: '49sd',
        brand: '49sd',
        hex: '#69f0ae',
        title: '49th Security Division',
        titleAlt: '49th Security Division',
        description: 'Redesigning a web application to better fit the culture of a student organization',
        imageUrl: projectImageBaseUrl + '49sd_home-laptop.png',
        imagePlaceholder: 'placeholder',
        caseStudy: '',
        buttonText: 'View Website',
        buttonLink: 'https://49sd.netlify.com'
    }

]

PROJECTS.forEach((project, index) => {
    project.number = index + 1
})

export const NUM_PROJECTS = PROJECTS.length