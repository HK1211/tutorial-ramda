import { ChangeDateTypeType } from './index.type';

export default class CustomDate extends Date {
  /**
   * 작성자: H00040, 작성일: 2022-04-01 금요일
   *
   * 설명: greencar 기본 단위인 YYYYMMDDhhmmss형태의 value을 받아서 Date 형태로 반환합니다.
   */
  static createDate(value: string): CustomDate {
    const result = value
      .split('')
      .map((str, i) => {
        switch (i) {
          case 4:
          case 6:
            return `/${str}`;
          case 8:
            return ` ${str}`;
          case 10:
            return `:${str}`;
          default:
            return str;
        }
      })
      .join('');
    return new CustomDate(result);
  }

  /**
   * 작성자: H00040, 작성일: 2022-04-01 금요일
   *
   * 설명: 두개 Date를 인자로 받아서, (date1-date2)값을 반환합니다.
   *
   * 설명: unit값이 'min'이면 분단위로 연산해서 반환합니다.
   */
  static calcPeriod(date1: Date, date2: Date, unit?: 'min'): number {
    const result = date1.getTime() - date2.getTime();
    return unit ? result / 1000 / 60 : result;
  }

  convertDateType(type?: ChangeDateTypeType): string {
    const YYYY = this.getFullYear();
    let MM: number | string = this.getMonth() + 1;
    let DD: number | string = this.getDate();
    const hours = this.getHours();
    const minutes = this.getMinutes();

    MM = MM < 10 ? `0${MM}` : MM;
    DD = DD < 10 ? `0${DD}` : DD;

    switch (type) {
      case 'YYYY-MM-DD':
        return `${YYYY}-${MM}-${DD}`;
      case 'MM월 DD일 hh:mm':
        return `${MM}월 ${DD}일 ${hours}:${minutes}`;
      case 'YYYY-MM-DD hh:mm':
        return `${YYYY}-${MM}-${DD} ${hours}:${minutes}`;
      default:
        return `${YYYY}년 ${MM}월 ${DD}일 ${hours}:${minutes}`;
    }
  }
}
