class Car {
  name: string;
  brand: string;
  year: number;

  constructor(name: string, brand: string, year: number) {
    this.name = name;
    this.brand = brand;
    this.year = year;
  }

  getYear(): number {
    return this.year;
  }

  getBrand(): string {
    return this.brand;
  }
}

export { Car };
