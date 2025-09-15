import basicMarkdown from './test-case/basic-markdown'
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
            <ReactMarkdown>{basicMarkdown}</ReactMarkdown>
          </div>
        </CardContent>
        <CardFooter>
          <p className='text-sm text-muted-foreground'>React Markdown would not set the default markdown style</p>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Streamdown</CardTitle>
        </CardHeader>
        <CardContent>
          <Streamdown>{basicMarkdown}</Streamdown>
        </CardContent>
        <CardFooter>
          <div className='text-sm text-muted-foreground'>
            <p>Built-in typography styles.Streamdown would set the class name for elements. Errors:</p>
            <p>Link inside code parse error([\`code\`](#code))</p>
            <p>Download element is tag div that is in the tag p that caused problems.</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default BasicMarkdown
