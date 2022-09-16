class Student {
  private _matricula: string;
  private _nome: string;
  private _notasProvas: number[];
  private _notasTrabalhos: number[];
    
  constructor(matricula: string, nome: string, notasProvas: number[], notasTrabalhos: number[]) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasProvas = notasProvas;
    this._notasTrabalhos = notasTrabalhos;
  }

  public get matricula(): string {
    return this._matricula;
  }
  public set matricula(value: string) {
    this._matricula = value;
  }

  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }

  public get notasProvas(): number[] {
    return this._notasProvas;
  }
  public set notasProvas(value: number[]) {
    this._notasProvas = value;
  }

  public get notasTrabalhos(): number[] {
    return this._notasTrabalhos;
  }
  public set notasTrabalhos(value: number[]) {
    this._notasTrabalhos = value;
  }
}

const studentA = new Student('001', 'isaac', [10, 10, 7 , 9], [8, 8, 9])

console.log(studentA);