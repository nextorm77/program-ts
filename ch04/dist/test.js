function fancyDate() {
  return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`;
}
let result = fancyDate.call(new Date());
console.log(result);
