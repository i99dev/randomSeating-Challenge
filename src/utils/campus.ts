/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   campus.ts                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: marvin <marvin@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/08/05 11:23:37 by marvin            #+#    #+#             */
/*   Updated: 2022/08/05 20:07:18 by marvin           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

interface userArray {
  userId: string;
  lastSeat: string;
  newSeat: string;
}

interface campusObject {
  [key: string]: object;
}
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

  private getSeatIndex(row: string): number {
    return parseInt(row.substring(1, 14));
  }

  private isOdd(num: number): boolean {
    return num % 2 == 1;
  }

  private isEven(num: number): boolean {
    return num % 2 == 0;
  }
  public randomSeat(lab: string[], user: any[]): campusObject | any {
    let numbersOfSeat = 0;
    const checkLab = lab.map(l => {
      if (this.campus[l] == undefined) {
        return {
          error: true,
          message: `${l} not found`,
        };
      }
      return {
        error: false,
        message: `${l} found`,
      };
    });
    if (checkLab.some(c => c.error)) {
      return checkLab.find(c => c.error).message;
    }

    // get space seat
    for (const l of lab) {
      for (const row in this.campus[l]) {
        for (const seat in this.campus[l][row]) {
          if (this.campus[l][row][seat] == null) {
            numbersOfSeat++;
          }
        }
      }
    }
    numbersOfSeat = numbersOfSeat / 2;
    for (const u of user) {
      for (const l of lab) {
        for (const row in this.campus[l]) {
          for (const seat in this.campus[l][row]) {
            if (
              this.campus[l][row][seat] == null &&
              u.lastSeat != this.getLocation(l, row, seat) &&
              u.newSeat == null &&
              this.isOdd(this.getSeatIndex(seat))
            ) {
              this.setSeat(l, row, seat, u.userId);
              u.newSeat = this.getLocation(l, row, seat);
              numbersOfSeat--;
              if (numbersOfSeat == 0) {
                //error if no seat available
                return {
                  error: true,
                  message: `No seat available`,
                };
              }
            }
            continue;
          }
        }
      }
    }
    return user;
  }
}

// const test = new labMaps();
// console.log(
//   test.randomSeat(
//     ['lab1', 'lab2'],
//     [
//       { userId: 'test', lastSeat: 'lab1r1s2' },
//       { userId: 'test2', lastSeat: 'lab1r1s3' },
//       { userId: 'test3', lastSeat: 'lab1r1s8' },
//       { userId: 'test4', lastSeat: 'lab1r1s10' },
//     ],
//   ),
// );
// console.log(test.searchUserSeat('test2'));
export default labMaps;
