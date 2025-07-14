import React from 'react'
import { CodeBlock } from './ui/code-block';

const Code = () => {
    const code = `import time
import random

def eat():
    print("🍕 Eating junk...")

def sleep():
    print("😴 Sleeping like a log...")

def code():
    bugs = random.randint(0, 5)
    print(f"💻 Coding... introduced {bugs} bugs.")
    return bugs

def fix_bugs(bugs):
    fixed = max(0, bugs - random.randint(1, 3))
    print(f"🔧 Tried fixing bugs. {bugs - fixed} more added.")
    return fixed + random.randint(1, 2)  # extra bugs

life = True
bugs = 0

while life:
    eat()
    sleep()
    bugs += code()
    bugs = fix_bugs(bugs)
    if bugs > 42:
        print("💥 Too many bugs. Rage quit.")
        life = False
    time.sleep(1)
`;
  return (
    <div className='mt-16'>
      <CodeBlock
        language="py"
        filename="lifeMantra.py"
        highlightLines={[9, 13, 14, 18,23,29,30]}
        code={code}
      />
    </div>
  )
}

export default Code
