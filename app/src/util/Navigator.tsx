interface Navigator {
    navigate(screen: string, params?: {}): void;
    goBack(): void;
  }