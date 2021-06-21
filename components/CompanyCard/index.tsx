import { useState } from 'react';
import {
  IoBusinessOutline,
  IoPersonOutline,
  IoPeopleOutline,
} from 'react-icons/io5';
import Company from 'types/Company';
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardContent from 'components/CardContent';
import PeopleList from 'components/PeopleList';
import TeamsList from 'components/TeamsList';
import CardFooter from 'components/CardFooter';
import CardFooterButton from 'components/CardFooterButton';

interface CompanyCardProps {
  company: Company;
}

const CompanyCard = ({ company }: CompanyCardProps) => {
  const [currentTab, setCurrentTab] = useState<'People' | 'Teams'>('People');

  return (
    <Card>
      <CardHeader title="Company" icon={<IoBusinessOutline size={20} />} />
      <CardContent>
        {currentTab === 'People' && <PeopleList people={company.people} />}
        {currentTab === 'Teams' && <TeamsList teams={company.teams} />}
      </CardContent>
      <CardFooter>
        <CardFooterButton
          icon={<IoPersonOutline size={20} />}
          active={currentTab === 'People'}
          onClick={() => setCurrentTab('People')}
        >
          People
        </CardFooterButton>
        <CardFooterButton
          icon={<IoPeopleOutline size={20} />}
          active={currentTab === 'Teams'}
          onClick={() => setCurrentTab('Teams')}
        >
          Teams
        </CardFooterButton>
      </CardFooter>
    </Card>
  );
};

export default CompanyCard;
