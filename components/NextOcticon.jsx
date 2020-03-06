import React from 'react';
import Octicon, {getIconByName} from '@githubprimer//octicons-react';

export default function NextOcticon({ name, ...props }) {
  return <Octicon {...props} icon={getIconByName(name)} />
}