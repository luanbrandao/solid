import { ReportGeneratorInterface } from "./report-generator-interface";

export class S3ReportGenerator implements ReportGeneratorInterface {
  generate(): string {
    console.log('S3ReportGenerator');
    return 'https://s3.amazonaws/mybucket/key_123'
  }
}