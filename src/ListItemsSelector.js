import SearchIcon from '@mui/icons-material/Search';
import { Button, Checkbox, FormControl, FormControlLabel, IconButton, InputAdornment, List, ListItem, ListItemButton, ListItemIcon, ListItemText, OutlinedInput, Switch } from "@mui/material";
import { Box } from '@mui/system';
import { useState } from "react";

function ListItemsSelector(props) {
    const [items] = useState(props.items);
    const [selectedItems, setSelectedItems] = useState(props.selectedItems);
    const [searchQuery, setSearchQuery] = useState('');
    const [showSelectedOnly, setShowSeletedOnly] = useState(false);

    const handleToggleItem = (item) => () => {
        const currentIndex = selectedItems.indexOf(item);
        const newSelectedItems = [...selectedItems];

        if (currentIndex === -1) {
            newSelectedItems.push(item);
        } else {
            newSelectedItems.splice(currentIndex, 1);
        }

        setSelectedItems(newSelectedItems);
        props.onSelectItems(newSelectedItems)
    }

    const clearAll = () => {
        setShowSeletedOnly(false);
        setSelectedItems([]);
        props.onSelectItems([]);
    }

    const handleToggleShowSelectedOny = (e) => {
        setShowSeletedOnly(e.target.checked);
    }

    return (
        <Box sx={{ h: props.height, overflow: 'hidden' }}>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <OutlinedInput
                    dense
                    fullWidth
                    id="search"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="search iconoggle password visibility"
                                edge="end"                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <div>
                <FormControlLabel control={<Switch onChange={handleToggleShowSelectedOny} checked={showSelectedOnly} />} label="Show selected only" />
                <Button dense onClick={clearAll}>Clear all</Button>
            </div>
            <List sx={{ overflow: 'auto', height: props.height - 100 }}>
                {(showSelectedOnly ? selectedItems : items).filter(f => f.indexOf(searchQuery) >= 0).map(item => {
                    const labelId = `checkbox-item-label-${item}`;
                    return (
                        <ListItem disablePadding
                            key={item}>
                            <ListItemButton onClick={handleToggleItem(item)} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={selectedItems.indexOf(item) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={item} />
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
        </Box>
    );
}

export default ListItemsSelector;