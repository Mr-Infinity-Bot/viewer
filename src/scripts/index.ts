/// <reference lib="dom" />

import { getContent } from '../_includes/scripts/getContent.ts';
import { getParameter } from '../_includes/scripts/getParameter.ts';

(async() => {
    const content = await getContent(getParameter('url'));
    const element = document.getElementsByTagName('p')[0];
    
    // @ts-expect-error
    element.innerHTML = marked.parse(content);
})();