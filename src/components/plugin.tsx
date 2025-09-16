import textWithPluginContent from './test-case/plugin'
import ReactMarkdown from 'react-markdown'
import { Streamdown } from 'streamdown'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize"
import remarkToc from 'remark-toc';
import remarkGfm from 'remark-gfm';
import { Button } from '@/components/ui/button'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math';
import { HTMLProps } from 'react';

// support Button in markdown
const schema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames || []), "button"],
}

const BasicMarkdown = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <Card>
        <CardHeader>
          <CardTitle>React Markdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='react-markdown'>
            <ReactMarkdown
              remarkPlugins={[
                remarkGfm,
                remarkMath,
                [remarkToc, { heading: "Contents", maxDepth: 3 }]
              ]}
              rehypePlugins={[
                rehypeRaw,
                [rehypeSanitize, schema],
                rehypeKatex
              ]}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              components={{ button: (props: any) => <Button {...props} /> }}
            >
              {textWithPluginContent}
            </ReactMarkdown>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Streamdown</CardTitle>
        </CardHeader>
        <CardContent>
          <Streamdown
            remarkPlugins={[
              [remarkToc, { heading: "Contents", maxDepth: 3 }] // Not worked
            ]}
            rehypePlugins={[
              rehypeRaw,
              // [rehypeSanitize, schema],
              // rehypeKatex
            ]}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            components={{ button: (props: any) => <Button {...props} /> }}
          >
            {textWithPluginContent}
          </Streamdown>
        </CardContent>

      </Card>
    </div>
  )
}

export default BasicMarkdown
