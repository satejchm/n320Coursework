//Sarah Tejchma
//Week 5 lab

//add a back button, when pressed move backward in display
//do something with student data when moving backwards
//create a third component that displays some relevant piece of data or new pieve of useful animation

Vue.component("student-card", {
  props: ["student", "isactive"],
  template:
    "<div class='student' v-bind:class='{ cardActive: isactive, cardOut: !isactive }'>{{ student.name }} : {{ student.skill }} <br> Joy: {{ student.joy }} <br> {{ student.expression }} </div>"
});

var app = new Vue({
  el: "#app",
  //creates an array of students
  data: {
    students: [
      { name: "Sarah", skill: 2, joy: 0, expression: ":D" },
      { name: "Wade", skill: 0, joy: 5, expression: ":)" },
      { name: "Bear", skill: 3, joy: 3, expression: ">:0" }
    ],
    //set current student, current student id, and boolean makes card appear
    currentStudent: { name: "Sarah", skill: 2, joy: 0 },
    curStudentId: 0,
    cardActive: true
  },

  methods: {
    arrowClicked: function() {
      //how do you update current student to point to the next student
      this.cardActive = !this.cardActive;

      setTimeout(() => {
        //modify the skill of the current student before moving forward
        this.currentStudent.skill++;

        //iteration code
        this.curStudentId++;

        if (this.curStudentId >= this.students.length) {
          this.curStudentId = 0;
        }

        this.currentStudent = this.students[this.curStudentId];

        //animation trigger
        this.cardActive = !this.cardActive;
      }, 300);
    },

    arrowBackwards: function() {
      //how do you update current student to point to the next student
      this.cardActive = !this.cardActive;

      setTimeout(() => {
        //modify the skill of the current student before moving backwards
        this.currentStudent.joy--;

        //iteration code
        this.curStudentId--;

        if (this.curStudentId < 0) {
          this.curStudentId = 2;
        }

        this.curStudentId = this.students[this.curStudentId];

        //animation trigger
        this.cardActive = !this.cardActive;
      }, 300);
    }
  }
});
