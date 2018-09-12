class FileHolder {
    constructor() {
        this.firstName = "",
        this.lastName = "",
        this.location = {
            campus: '',
            description: ''
        }
    };

    toJSON() {
        return {
          firstName: this.firstName,
          lastName:  this.firstName,
          location:  {
            campus: '',
            description: ''              
          }
        };
    }
};

class Student {
    constructor() {
        this.firstName = "",
        this.lastName = "",
        this.hasServices = false,
        this.onEdPlan = false,
        this.location = {
          campus: "",
          description: ""
        },
        this.comments = ""
    }
}

 export default FileHolder;