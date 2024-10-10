const STATUS = {
    WAITING: 'waiting',
    APPROVED: 'approved',
    REJECTED: 'rejected'
}

const registerationTemplate = (studentName, link) => {
    // If user registered by him/herself Link has to be provided here, Now the link is not given in the template.  

    return `
    Dear ${studentName},

    We are pleased to inform you that your registration for SkillsDA, our esteemed educational platform, has been successfully processed. 
    Welcome aboard! We are excited to have you join our learning community.
    Below are the details of your registration,
    As a registered student, you now have access to a wide range of courses and learning materials tailored to enhance your skills and knowledge in your chosen field. At SkillsDA, we strive to provide high-quality education and an interactive learning environment to help you achieve your goals.
    
    To get started, please follow these steps:
    
        1. Visit the Skillsda website at [www.skillsdalabs.com]
        2. Click on the "Login" button located at the top right corner of the homepage.
        3. Enter your username and password to access your student dashboard.
        4. Explore the available courses and resources in your enrolled exersices.
        5. Engage in discussions, ask questions, and collaborate with fellow students and instructors in the course forums.
        6. Complete the assignments, quizzes, and assessments as instructed by your course instructors.
        7. Track your progress and review your grades on your student dashboard.
        8. If you have any questions or need assistance, our support team is available to help you. Feel free to reach out to us at cyberlabs@skillsda.com.
    
    We believe that learning is an ongoing journey, and we are committed to supporting you every step of the way. We encourage you to make the most of your SkillsDA experience and take advantage of the valuable resources available to you.
    
    Once again, Welcome to SkillsDA ! We look forward to witnessing your growth and success.
    `
}

const passwordResetTemplate = (studentName, resetLink) => {
    return (
        `
        Dear user ${studentName},
        
        We have received a request to reset your password for your SkillsDA account. We understand that sometimes passwords can slip our minds, but no worries – we're here to help you regain access to your account.

        To reset your password, please follow the link below:
        [${resetLink}]

        1.Once you have completed these steps, your password will be successfully reset. You can then log in to your Skillsda account using your new password.
        2.If you did not initiate this password reset request, please disregard this email. Your account will remain secure, and no changes will be made.
        3.If you encounter any issues or need further assistance, please don't hesitate to contact our support team at cyberlabs@skillsda.com and We are here to help you resolve any concerns you may have.

        Thank you for being a valued member of the Skillsda community. We strive to provide you with the best learning experience possible.
        
        Students will be performing the lab exersices with Our Virtual Labs. Studnets will be getting access to individual POD/VMs where they can perform lab exersices. Every POD is a Sandbox enviroinment will have all the necessary softwares installed. 
        `
    )
}

module.exports = { STATUS, registerationTemplate, passwordResetTemplate }