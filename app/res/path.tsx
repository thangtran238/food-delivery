type ComponentType = React.FC<any>;

interface Path {
    name: string;
    component: ComponentType;
    index?: boolean;
  }
  