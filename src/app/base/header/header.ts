import { HttpHeaders } from '@angular/common/http';

const setHeader = (token: string) => {
  let headToken: HttpHeaders;
  headToken = new HttpHeaders()
    .append('accept', 'application/json')
    .append('Access-Control-Allow-Origin', '*')
    .append('accept', 'text/plain')
    .append('authorization', 'Bearer ' + token);

  return headToken;
};

export const getHeader = () => {
  const sessionToken = sessionStorage.getItem('org-session')!;  
  return setHeader(sessionToken);
};
