import { Content } from './Content';
import { SchoolLevel } from './SchoolLevel';

export class MasteredSchoolContent {
  private content: Content;
  private schoolLevel: SchoolLevel;
  
  constructor(content: Content, schoolLevel: SchoolLevel) {
    this.content = content;
    this.schoolLevel = schoolLevel;
  }
}
