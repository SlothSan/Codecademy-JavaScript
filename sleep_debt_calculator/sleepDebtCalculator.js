const getSleepHours = (day, hours = 8) => {
    if (day === 'monday') {
      return hours;
    } else if (day === 'tuesday') {
      return hours;
    } else if (day === 'wednesday') {
      return hours;
    } else if (day === 'thursday') {
      return hours;
    } else if (day === 'friday') {
      return hours;
    } else if (day === 'saturday') {
      return hours;
    } else if (day === 'sunday') {
      return hours;
    }
  }
  
  const getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  getIdealSleepHours = () => {
    let idealHours = 7;
    return idealHours * 7;
  }
  
  calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    let sleepHours = actualSleepHours - idealSleepHours;
  
    if (actualSleepHours > idealSleepHours) {
      console.log(`Well done, you got more hours that you needed ! You got ${sleepHours} more than needed, good job.`);
    } else if (actualSleepHours < idealSleepHours) {
      console.log(`Oh Dear, you must be sleep, get some rest! Your sleep debt is currently ${sleepHours}`)
    } else if (actualSleepHours === idealSleepHours) {
      console.log('Well done, you got the perfect amount of sleep, ZEN!');
    }
  }
  
  calculateSleepDebt();