export default class Person {
  private _name: string;
  private _birthDate: Date;
  
  constructor(name: string, birthDate: Date) {
    this.validateName(name);
    
    this._name = name;
    this._birthDate = birthDate;
  }

  private validateName(value: string) {
    if (value.length < 3) {
      throw new Error('INVALID_NAME');
    }
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get birthDate(): Date {
    return this._birthDate;
  }

  public set birthDate(value: Date) {
    this._birthDate = value;
  }
}