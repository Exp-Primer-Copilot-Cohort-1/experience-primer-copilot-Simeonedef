function skillsMember() {
    var member = {
        skills: ['JavaScript', 'React', 'Node', 'MongoDB', 'HTML', 'CSS'],
        showSkills: function() {
            this.skills.forEach((skill) => {
                console.log(`${skill}`);
            });
        }
    };
    member.showSkills();
}