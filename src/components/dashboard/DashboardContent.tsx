import { Container, Heading, Text, Card } from '@/components/ui';

export default function DashboardContent() {
  return (
    <Container size="xl" className="dashboard-content">
      <div className="dashboard-content__welcome">
        <Heading as="h1" size="h1">
          Welcome to BuildOS
        </Heading>
        <Text size="lg" tone="muted">
          Your workspace is ready.
        </Text>
      </div>

      <div className="dashboard-content__cards">
        <Card variant="elevated" padding="md">
          <Heading as="h3" size="h3">
            Projects
          </Heading>
          <Text size="xl" weight="bold">
            0
          </Text>
          <Text size="sm" tone="muted">
            No projects yet.
          </Text>
        </Card>

        <Card variant="elevated" padding="md">
          <Heading as="h3" size="h3">
            Tasks
          </Heading>
          <Text size="xl" weight="bold">
            0
          </Text>
          <Text size="sm" tone="muted">
            No tasks yet.
          </Text>
        </Card>

        <Card variant="elevated" padding="md">
          <Heading as="h3" size="h3">
            Profile
          </Heading>
          <Text size="md">
            View
          </Text>
          <Text size="sm" tone="muted">
            Manage your profile.
          </Text>
        </Card>
      </div>

      <div className="dashboard-content__placeholder">
        <Text tone="muted">
          Dashboard coming next…
        </Text>
      </div>
    </Container>
  );
}