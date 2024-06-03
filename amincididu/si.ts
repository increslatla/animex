// Defines an interface for objects that have an ID property
interface HasID {
  id: string;
}

// Implements the HasID interface with a class
class Entity implements HasID {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  // Generates a unique ID for an entity
  static generateID(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  // Displays the ID of the entity
  displayID(): void {
    console.log(`The ID of the entity is: ${this.id}`);
  }
}

// Example usage
const newEntity = new Entity(Entity.generateID());
newEntity.displayID();
