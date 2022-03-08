const speakers = [
    {
        name:'Yochai Benkler',
        tag_name:'yohai benkler',
        picture:'images/speakers/speaker_01.png',
        workplace: 'Professor at Harvard Law School',
        description: `Focusing on a collaborative approach in a networked environment, he created the concept of
        co-production based on sharing, such as open source software and Wikipedia.`
    },
    {
        name:'Jeon Gil-nam',
        tag_name:'Kilnam Chon',
        picture:'images/speakers/speaker_02.png',
        workplace: 'Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)',
        description: `By developing Asia's first Internet protocol network SDN and leading Korea's first private line Internet connection in 1990, it ushered in the era of the Internet in earnest.`
    },
    {
        name:'Noh So-young',
        tag_name:'Sohyeong Noh',
        picture:'images/speakers/speaker_03.png',
        workplace: 'Art Center Nabi Director, CC Korea Director',
        description: `As the author of &lt;Digital Art Art of Our Time&gt;, he opened 'Art Center Nabi', Korea's first digital art institution in 2000, and is currently serving.`
    },
    {
        name:'Jeon Gil-nam',
        tag_name:'Kilnam Chon',
        picture:'images/speakers/speaker_04.png',
        workplace: 'Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)',
        description: `By developing Asia's first Internet protocol network SDN and leading Korea's first private line Internet connection in 1990, it ushered in the era of the Internet in earnest.`
    },
    {
        name:'Julia Leda',
        tag_name:'Julia Leda',
        picture:'images/speakers/speaker_05.png',
        workplace: 'Professor at Harvard Law School',
        description: `Focusing on a collaborative approach in a networked environment, he created the concept of
        co-production based on sharing, such as open source software and Wikipedia.`
    },
    {
        name:'Jeon Gil-nam',
        tag_name:'Kilnam Chon',
        picture:'images/speakers/speaker_06.png',
        workplace: 'Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)',
        description: `By developing Asia's first Internet protocol network SDN and leading Korea's first private line Internet connection in 1990, it ushered in the era of the Internet in earnest.`
    }
]
const speakersList = document.getElementById('speakers-list');

window.onload = (params) => {
speakers.forEach((speaker)=>{
    const speakerHTML = `<div class="speaker clearfix">
                            <img src=${speaker.picture} alt="${speaker.name}"/>
                            <div class="desc">
                                <p href="#" class="speaker-name">${speaker.name}</p>
                                <p href="#" class="speaker-tag-name">${speaker.tag_name}</p>
                                <p href="#" class="speaker-job">${speaker.workplace}</p>
                                <p class="speaker-desc">${speaker.description}</p>

                            </div>
                        </div>`
    speakersList.insertAdjacentHTML('afterbegin',speakerHTML)
    
})
}