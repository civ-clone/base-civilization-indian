import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Indian from '../Indian';

export class MahatmaGandhi extends Leader {
  static civilization(): typeof Civilization {
    return Indian;
  }

  name(): string {
    return 'Mahatma Gandhi';
  }
}

export default MahatmaGandhi;
