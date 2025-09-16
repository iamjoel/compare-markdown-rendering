import { unterminatedBold, unterminatedCodeBlock, unterminatedInlineCode, unterminatedItalic, unterminatedLink } from './test-case/unterminated-block-parsing'
import ReactMarkdown from 'react-markdown'
import { Streamdown } from 'streamdown'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const BasicMarkdown = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <Card>
        <CardHeader>
          <CardTitle>React Markdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='react-markdown'>
            <ReactMarkdown>
              {unterminatedBold}
            </ReactMarkdown>
            <ReactMarkdown>
              {unterminatedItalic}
            </ReactMarkdown>
            <ReactMarkdown>
              {unterminatedInlineCode}
            </ReactMarkdown>
            <ReactMarkdown>
              {unterminatedCodeBlock}
            </ReactMarkdown>
            <ReactMarkdown>
              {unterminatedLink}
            </ReactMarkdown>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Streamdown</CardTitle>
        </CardHeader>
        <CardContent>
          <Streamdown>
            {unterminatedBold}
          </Streamdown>
          <Streamdown>
            {unterminatedItalic}
          </Streamdown>
          <Streamdown>
            {unterminatedInlineCode}
          </Streamdown>
          <Streamdown>
            {unterminatedCodeBlock}
          </Streamdown>
          <Streamdown>
            {unterminatedLink}
          </Streamdown>
        </CardContent>
      </Card>
    </div>
  )
}

export default BasicMarkdown
