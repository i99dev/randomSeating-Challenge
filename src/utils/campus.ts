/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   campus.ts                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: marvin <marvin@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/08/05 11:23:37 by marvin            #+#    #+#             */
/*   Updated: 2022/08/05 11:25:19 by marvin           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import _ from 'lodash';

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

  public getLab(lab: string): any {
    return this.campus[lab];
  }

  public getRow(lab: string, row: string): any {
    return this.campus[lab][row];
  }

  public getSeat(lab: string, row: string, seat: string): any {
    return this.campus[lab][row][seat];
  }

  public setSeat(lab: string, row: string, seat: string, value: any): void {
    this.campus[lab][row][seat] = value;
  }

  public getCampus(): any {
    return this.campus;
  }

  public setCampus(campus: any): void {
    this.campus = campus;
  }

  public getLocation(lab: string, row: string, seat: string): string {
    return lab + row + seat;
  }

  public searchUserSeat(lsearch: string): any {
    const result: any = [];
    for (const lab in this.campus) {
      for (const row in this.campus[lab]) {
        for (const seat in this.campus[lab][row]) {
          if (this.campus[lab][row][seat] == lsearch) {
            result.push(this.getLocation(lab, row, seat));
          }
        }
      }
    }
    if (result.length == 0) {
      return null;
    }
    return result[0];
  }
}

// const test = new labMaps();
// test.setSeat('lab1', 'r1', 's1', 'test');
// console.log(test.getLab('lab1'));
// console.log(test.getRow('lab1', 'r1'));
// console.log(test.getSeat('lab1', 'r1', 's1'));
// console.log(test.searchUserSeat('test'));
export default labMaps;
