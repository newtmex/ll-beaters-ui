import {
    Container,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
} from "@chakra-ui/react";

export default function Home() {
    return (
        <Container>
            <Tabs>
                <TabList>
                    <Tab>Add Stake</Tab>
                    <Tab>Roll Dice</Tab>
                    <Tab>Mint Family</Tab>
                    <Tab>Winnings</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <p>Add Stake!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Rool Dice!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Mint Family!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Winnings!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    );
}
