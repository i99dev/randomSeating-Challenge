// import _ from 'lodash';

class labMaps {
  private campus: any = {
    lab1: {
      r1: {
        s1: null,
        s2: null,
        s3: null,
        s4: null,
        s5: null,
        s6: null,
        s7: null,
        s8: null,
        s9: null,
        s10: null,
        s11: null,
        s12: null,
        s13: null,
        s14: null,
      },
      r2: {
        s1: null,
        s2: null,
        s3: null,
        s4: null,
        s5: null,
        s6: null,
        s7: null,
        s8: null,
        s9: null,
        s10: null,
        s11: null,
        s12: null,
        s13: null,
        s14: null,
      },
      r3: {
        s1: null,
        s2: null,
        s3: null,
        s4: null,
        s5: null,
        s6: null,
        s7: null,
        s8: null,
        s9: null,
        s10: null,
        s11: null,
        s12: null,
        s13: null,
        s14: null,
      },
      r4: {
        s1: null,
        s2: null,
        s3: null,
        s4: null,
        s5: null,
        s6: null,
        s7: null,
        s8: null,
        s9: null,
        s10: null,
        s11: null,
        s12: null,
        s13: null,
        s14: null,
      },
      r5: {
        s1: null,
        s2: null,
        s3: null,
        s4: null,
        s5: null,
        s6: null,
        s7: null,
        s8: null,
        s9: null,
        s10: null,
        s11: null,
        s12: null,
        s13: null,
        s14: null,
      },
      r6: {
        s1: null,
        s2: null,
        s3: null,
        s4: null,
        s5: null,
        s6: null,
        s7: null,
        s8: null,
        s9: null,
        s10: null,
        s11: null,
        s12: null,
        s13: null,
        s14: null,
      },
    },
    lab2: {
      r1: {
        s1: null,
        s2: null,
        s3: null,
        s4: null,
        s5: null,
        s6: null,
        s7: null,
        s8: null,
        s9: null,
        s10: null,
        s11: null,
        s12: null,
        s13: null,
        s14: null,
      },
      r2: {
        s1: null,
        s2: null,
        s3: null,
        s4: null,
        s5: null,
        s6: null,
        s7: null,
        s8: null,
        s9: null,
        s10: null,
        s11: null,
        s12: null,
        s13: null,
        s14: null,
      },
      r3: {
        s1: null,
        s2: null,
        s3: null,
        s4: null,
        s5: null,
        s6: null,
        s7: null,
        s8: null,
        s9: null,
        s10: null,
        s11: null,
        s12: null,
        s13: null,
        s14: null,
      },
      r4: {
        s1: null,
        s2: null,
        s3: null,
        s4: null,
        s5: null,
        s6: null,
        s7: null,
        s8: null,
        s9: null,
        s10: null,
        s11: null,
        s12: null,
        s13: null,
        s14: null,
      },
    },
    lab3: {
      r1: {
        s1: null,
        s2: null,
        s3: null,
        s4: null,
        s5: null,
        s6: null,
        s7: null,
        s8: null,
        s9: null,
        s10: null,
        s11: null,
        s12: null,
        s13: null,
        s14: null,
      },
      r2: {
        s1: null,
        s2: null,
        s3: null,
        s4: null,
        s5: null,
        s6: null,
        s7: null,
        s8: null,
        s9: null,
        s10: null,
        s11: null,
        s12: null,
        s13: null,
        s14: null,
      },
      r3: {
        s1: null,
        s2: null,
        s3: null,
        s4: null,
        s5: null,
        s6: null,
        s7: null,
        s8: null,
        s9: null,
        s10: null,
        s11: null,
        s12: null,
        s13: null,
        s14: null,
      },
      r4: {
        s1: null,
        s2: null,
        s3: null,
        s4: null,
        s5: null,
        s6: null,
        s7: null,
        s8: null,
        s9: null,
        s10: null,
        s11: null,
        s12: null,
        s13: null,
        s14: null,
      },
      r5: {
        s1: null,
        s2: null,
        s3: null,
        s4: null,
        s5: null,
        s6: null,
        s7: null,
        s8: null,
        s9: null,
        s10: null,
        s11: null,
        s12: null,
        s13: null,
        s14: null,
      },
      r6: {
        s1: null,
        s2: null,
        s3: null,
        s4: null,
        s5: null,
        s6: null,
        s7: null,
        s8: null,
        s9: null,
        s10: null,
        s11: null,
        s12: null,
        s13: null,
        s14: null,
      },
      r7: {
        s1: null,
        s2: null,
        s3: null,
        s4: null,
        s5: null,
        s6: null,
        s7: null,
        s8: null,
        s9: null,
        s10: null,
        s11: null,
        s12: null,
        s13: null,
        s14: null,
      },
      r8: {
        s1: null,
        s2: null,
        s3: null,
        s4: null,
        s5: null,
        s6: null,
        s7: null,
        s8: null,
        s9: null,
        s10: null,
        s11: null,
        s12: null,
        s13: null,
        s14: null,
      },
    },
  };
  public getCampus(): any {
    return this.campus;
  }
  public setCampus(campus: any): void {
    this.campus = campus;
  }
  public getLab(lab: string): any {
    return this.campus[lab];
  }
  public setLab(lab: string, labData: any): void {
    this.campus[lab] = labData;
  }
  public getRow(lab: string, row: string): any {
    return this.campus[lab][row];
  }
  public getSeat(lab: string, row: string, seat: string): any {
    return this.campus[lab][row][seat];
  }
  public setSeat(lab: string, row: string, seat: string, user: string): void {
    this.campus[lab][row][seat] = user;
  }
  public getUser(lab: string, row: string, seat: string): any {
    return this.campus[lab][row][seat];
  }
  public setUser(lab: string, row: string, seat: string, user: string): void {
    this.campus = {
      ...this.campus,
      [lab]: {
        ...this.campus[lab],
        [row]: {
          ...this.campus[lab][row],
          [seat]: user,
        },
      },
    };
  }
}

const test = new labMaps();
test.setUser('lap3', 'r1', 's2', 'oal-tena');
console.log(test.getRow('lap1', 'r1'));

export default labMaps;