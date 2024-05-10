import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  const summary = children.slice(0, limit) + '...';

  return (
    <div>
      <Text>
        {expanded ? children : summary}
        <Button
          size='xs'
          fontWeight='bold'
          colorScheme='blue'
          marginStart={2}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show less' : 'Show more'}
        </Button>
      </Text>
    </div>
  );
};

export default ExpandableText;
