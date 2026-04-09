import { KeywordExplainerPage } from '../components/KeywordExplainerPage';
import { KEYWORD_PAGE_CONTENT } from '../data/experienceData';

export function AIExecutionControlPage() {
  return <KeywordExplainerPage {...KEYWORD_PAGE_CONTENT['ai-execution-control']} />;
}
