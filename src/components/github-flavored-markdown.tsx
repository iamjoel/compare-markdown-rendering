import githubFlavoredMarkdown from './test-case/github-flavored-markdown'
import RemarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import { Streamdown } from 'streamdown'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'

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
              remarkPlugins={[RemarkGfm]}
            >
              {githubFlavoredMarkdown}
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
            {githubFlavoredMarkdown}
          </Streamdown>
        </CardContent>
      </Card>
    </div>
  )
}

export default BasicMarkdown
