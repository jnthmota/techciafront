export const state = {
    vacancys: [],
    vacancyCandidates: [],
    vacancyCreate: {
        position: '',
        minLevel: '',
        skills: [
            {
                experience: '',
                timeExperience: 0
            }
        ],
        education: [
            {
                degreeSchooling: '',
                course: ''
            }
        ],
        languages: [
            {
                language:'' ,
                writtenLevel: '',
                readingLevel: '',
                conversationLevel: ''
            }
        ],
        description: '',
        maxSalary: 0,
        offerType: [
            
        ],
        workType: [
            
        ],
        citiesForWork: [
            {
                city: '',
                state: ''
            }
        ]
    }

}
