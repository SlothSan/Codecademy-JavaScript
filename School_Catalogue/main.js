class School {
    constructor(name,level,numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    set numberOfStudents(newNumberOfStudents){
      if (typeof newNumberOfStudents === 'number'){
        this._numberOfStudents = newNumberOfStudents;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
    }
    quickFacts() {
      console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
    }
    static pickSubstituteTeacher(substituteTeachers){
      const randomTeacher = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[randomTeacher];
    }
  }
  class PrimarySchool extends School {
    constructor(name,numberOfStudents,pickupPolicy){
      super(name,'primary',numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  class HighSchool extends School {
    constructor(name,numberOfStudents,sportsTeams){
      super(name,'high',numberOfStudents);
      this._sportsTeams = sportsTeams;;
    }
    get sportsTeams() {
      console.log(this._sportsTeams);
      return this._sportsTeams;
    }
  }
  const lorraineHansbury = new PrimarySchool ('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  lorraineHansbury.quickFacts();
  School.pickSubstituteTeacher(['Jamal Crawford','Lou Williams','J. R. Smith','James Harden','Jason Terry','Manu Ginobli']);
  const alSmith = new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  console.log(alSmith.sportsTeams);
  
  //Testing below
  console.log(' ');
  console.log(' ');
  console.log(School.pickSubstituteTeacher(['teacher1','teacher2','teacher3','teacher4','teacher5'])); // Proof that pickSubstituteTeacher works
  console.log(' ');
  console.log(lorraineHansbury); //Proof that lorraineHansbury exists
  console.log(' ');
  console.log(School.pickSubstituteTeacher(['Jamal Crawford','Lou Williams','J. R. Smith','James Harden','Jason Terry','Manu Ginobli']));//Proof that pickSubstituteTeacher works
  console.log(' ');
  console.log(alSmith);//Proof that alSmith exists