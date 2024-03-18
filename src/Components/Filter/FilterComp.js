import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import { Button } from '../Buttons/Button'

export const FilterComp = () => {
    return (
        <div>
            <h4>Filters</h4>
            <div className='bg-white'>
                <Accordion allowZeroExpanded={true}>
                    <AccordionItem  >
                        <AccordionItemHeading  >
                            <AccordionItemButton style={{ userSelect: "none", background: "white" }} className='b_h13 d-flex justify-content-between px-3 my-2'>
                                <span className='b_text_red_light_color'>  Languages</span> <span>Clear</span>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='d-flex flex-wrap gap-2'>
                                <Button title={"Hindi"} />
                                <Button title={"Marathi"} />
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>

        </div>
    )
}
