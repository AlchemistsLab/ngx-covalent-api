import { LogParam } from './LogParam';

export interface LogEventDecoded {
  name: String;
  signature: String;
  params: LogParam[];
}
