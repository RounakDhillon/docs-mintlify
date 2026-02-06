export const APICode = () => {
    return (
        <div>
            <CodeGroup dropdown>
                <CodeGroup dropdown>
                    <CodeBlock language="javascript" filename="helloWorld.js">
                        {`console.log("Hello World");`}
                    </CodeBlock>
                    <CodeBlock language="python" filename="hello_world.py">
                        {`print('Hello World!')`}
                    </CodeBlock>
                    <CodeBlock language="java" filename="HelloWorld.java">
                        {`class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`}
                    </CodeBlock>
                </CodeGroup>

            </CodeGroup>
        </div>
    )
}
