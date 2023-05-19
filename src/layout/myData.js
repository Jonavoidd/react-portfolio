const userData = {
    mediumUsername: "kurt",
    name: "Kurt Jonathan Gozano",
    designation: "Software Engineer",
    avatarUrl: process.env.PUBLIC_URL + "/img/new-pic.jpg",
    avatarUrlTwo: process.env.PUBLIC_URL + "/img/kurt-new-pic.png",
    email: "kurtjonathangozano@gmail.com",
    phone: "+63 927 329 0535",
    address: "Cebu City, Cebu, Philippines",
    about: {
        title:
            "Hi! I'm a first year BSIT student, a new developer working with Java and JavaScript. I design for front-end using React\n" +
            "js, HTML and CSS. I also use Java and Python for other projects.",
        description: [
            'I am a first year student in Southwestern University PHINMA studying under the program Bachelor of Science in Information Technology',
            'I have created various projects using Java and Python and also a desinged a web using HTML, CSS and JavaScript',
            'I am 19 years old as of this moment and is studying to become even more proficient'
        ],
    },

    experience: [
        {
            title: "Student",
            company: "SWU PHINMA",
            year: "2022-202?",
            desc: "A student learning to become a better software engineer by the day.",
        },
    ],

    socialLinks: {
        instagram: "https://www.instagram.com/kurt_gozano/",
        twitter: "https://twitter.com/jg_kurt",
        github: "https://github.com/Jonavoidd",
        facebook: "https://www.facebook.com/kurtjonathan.gozano.75",
    },
};

export default userData;