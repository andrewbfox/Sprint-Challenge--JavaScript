// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(attrs) {
    this.length = attrs.length;
    this.width = attrs.width;
    this.height = attrs.height;
    }

    volume() {
        return this.length * this.width * this.height;
    }
    
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(attrs) {
        super(attrs);
        this.length = attrs.length;
        this.width = attrs.width;
        this.height = attrs.height;
    }

    cubeVolume() {
        if (this.length !== this.width || this.width !== this.height || this.height !== this.length) {
            return `This object is not a cube because its dimensions are not equal.`;
        } else {
        return this.length * this.width * this.height;
        }
    }

    cubeSurfaceArea() {
        if (this.length !== this.width || this.width !== this.height || this.height !== this.length) {
            return `This object is not a cube because its dimensions are not equal.`;
        } else {
        return 6 * this.length * this.width;
        }
    }
}

const cube = new CubeMaker({
    length: 5,
    width: 4,
    height: 3,
})

const cube2 = new CubeMaker({
    length: 5,
    width: 5,
    height: 5,
})

console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());
console.log(cube2.cubeVolume());
console.log(cube2.cubeSurfaceArea());
console.log(cube2.volume());            //Question in sli.do was correct,
console.log(cube2.surfaceArea());       //cube is special case of cuboid so cuboid equations work just as well
