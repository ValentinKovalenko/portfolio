export const lettersHead = Array.from(`Hello 👋 I'm Valentin Kovalenko 
  \nI am a frontend developer / programmer.\nExperienced, quick learning, open-minded and passionate about my every work.`);


export const skillsText = Array.from(`1. Javascript ★ ★ ★ ★ ☆\n2. Typescript ★ ★ ★ ★ ☆\n3. React Js ★ ★ ★ ★ ☆\n4. HTML/Css/Sass/Tailwind CSS ★ ★ ★ ★ ☆\n5. Redux Toolkit ★ ★ ★ ★ ☆\n6. React Testing Library ★ ★ ★ ☆ ☆\n7. React Hook Form ★ ★ ★ ☆ ☆\n8. GIT ★ ★ ★ ☆ ☆`)

export const links = [
  {label: '/', value: 'Home'},
  {label: '/experience', value: 'Experience'},
  {label: '/skills', value: 'Skills'},
  {label: '/education', value: 'Education'},
  {label: '/contacts', value: 'Contacts'},
]

export const textExperience = [
  {id: 1, text: 'Employment history'},
  {id: 2, text: '2010 - 2015 Sales manager.'},
  {id: 3, text: '2015 - 2020 Expert on the development of the regional Internet network in the Cherkasy region in company UNTC'},
  {id: 4, text: 'From September 1st, 2021 till February 17th, 2023 React frontend developer in company Ekreative'},
]

export const container = {
  hidden: {opacity: 0},
  visible: (i = 1) => ({
    opacity: 1,
    transition: {staggerChildren: 0.03, delayChildren: 0.04 * i},
  }),
};

export const child = {
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    x: -20,
    y: 10,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export const containerExperience = {
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0.1,
    x: 0,
    y: 50,
    transition: {
      duration: 1,
    },
  },
}

export const contactLeft = {
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    x: -150,
    y: 0,
    transition: {
      duration: 1,
    },
  },
}

export const contactRight = {
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    x: 150,
    y: 0,
    transition: {
      duration: 1,
    },
  },
}

export const contactCenter = {
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    x: 0,
    y: 100,
    transition: {
      duration: 1,
    },
  },
}