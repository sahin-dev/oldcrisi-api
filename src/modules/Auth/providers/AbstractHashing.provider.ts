import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class HashingProvider {
  abstract hash(data: string | Buffer): Promise<string>;
  abstract compare(data: string, encrypted: string): Promise<boolean>;
}
